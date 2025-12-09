// Este arquivo é uma cópia para DESENVOLVIMENTO LOCAL.
// Em produção, `js/firebase-config.js` é gerado automaticamente pelo processo de build.

const firebaseConfig = {
    apiKey: "AIzaSyCLr3ogjIwFQP43lhhgr_zCoO3d1XOc9ag",
    authDomain: "sys-rh-d5f0d.firebaseapp.com",
    projectId: "sys-rh-d5f0d",
    storageBucket: "sys-rh-d5f0d.appspot.com",
    messagingSenderId: "918840358373",
    appId: "1:918840358373:web:81725ece352c347a3a6b0c",
    measurementId: "G-R7NX79FCH5"
};

console.log('🔧 Firebase Config (Local Dev, js/) carregada:', {
    projectId: firebaseConfig.projectId,
    authDomain: firebaseConfig.authDomain,
    storageBucket: firebaseConfig.storageBucket,
    hasApiKey: !!firebaseConfig.apiKey
});

if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig);
        console.log('✅ Firebase inicializado com sucesso (Local Dev, js/)');
    } catch (error) {
        console.error('❌ Erro ao inicializar Firebase (Local Dev, js/):', error);
    }
}

const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

if (db) {
    db.enablePersistence()
        .then(() => console.log('✅ Persistência offline habilitada (Local Dev, js/)'))
        .catch((err) => {
            if (err.code === 'failed-precondition') {
                console.warn('⚠️ Persistência já ativa em outra aba (Local Dev, js/)');
            } else if (err.code === 'unimplemented') {
                console.warn('⚠️ Browser não suporta persistência offline (Local Dev, js/)');
            } else {
                console.error('❌ Erro ao habilitar persistência (Local Dev, js/):', err);
            }
        });
}

window.db = db;
window.auth = auth;
window.timestamp = timestamp;
window.firebase = firebase;
