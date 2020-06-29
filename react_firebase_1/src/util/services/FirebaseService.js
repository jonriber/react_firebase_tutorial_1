//This is my central to manage actions on db
//Components consume some of these methods

import {firebaseDatabase,firebaseAuth} from '../firebaseUtils';

//main class
class FirebaseService {
    
    static getDataList = (nodePath,callback, size = 10) => {
        let query = firebaseDatabase.ref(nodePath).limitToLast(size);

        query.on('value', dataSnapshot => {
            let items =[];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });
        return query;
    };

    static pushData = (node,objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static remove = (id,node) => {
        return firebaseDatabase.ref(node +'/' + id).remove();
    };

    static getUniqueDataBy = (node, id, callback) => {
        const ref = firebaseDatabase.ref(node + '/' +id);
        let newData = {};
        ref.once('value',(dataSnapshot) => {
            if (!dataSnapshot || dataSnapshot === undefined || !dataSnapshot.val() || dataSnapshot.val() === undefined) {
                callback(null);
                return;
            }
            const snap = dataSnapshot.val();
            const keys = Object.keys(snap);
            keys.forEach((key) => {
                newData[key] = snap[key]
            });
        }).then(() => {
            callback(newData);
        });
    };

    //using firebase authentication
    //creating methods
    static createUser = (email,password) => {
        return firebaseAuth.createUserWithEmailAndPassword(email,password);
    };
    
    static login = (email,password) => {
        return firebaseAuth.signInWithEmailAndPassword(email,password);
    };

    static logout = () => {
        return firebaseAuth.signOut();
    };

    static onAuthChange = (callbackLogin, callbackLogout) => {
        firebaseAuth.onAuthStateChanged(authUser => {
            if (!authUser) {
                callbackLogout(authUser);
            } else {
                callbackLogin(authUser);
            }
        });
    };
}

export default FirebaseService;