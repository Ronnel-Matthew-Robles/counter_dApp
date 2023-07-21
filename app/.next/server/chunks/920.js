"use strict";
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 9950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ RequestAirdrop)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6654);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_4__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const RequestAirdrop = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const { getUserSOLBalance  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!publicKey) {
            console.log('error', 'Wallet not connected!');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: 'error',
                description: 'Wallet not connected!'
            });
            return;
        }
        let signature = '';
        try {
            signature = await connection.requestAirdrop(publicKey, 1 * _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL);
            await connection.confirmTransaction(signature, 'confirmed');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'success',
                message: 'Airdrop successful!',
                txid: signature
            });
            getUserSOLBalance(publicKey, connection);
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_4__/* .notify */ .h)({
                type: 'error',
                message: `Airdrop failed!`,
                description: error?.message,
                txid: signature
            });
            console.log('error', `Airdrop failed! ${error?.message}`, signature);
        }
    }, [
        publicKey,
        connection,
        getUserSOLBalance
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "px-8 m-2 btn animate-pulse bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ...",
            onClick: onClick,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: "Airdrop 1 "
            })
        })
    }));
};

});

/***/ }),

/***/ 3535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ SendTransaction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6654);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const SendTransaction = ()=>{
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey , sendTransaction  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (!publicKey) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
                type: 'error',
                message: `Wallet not connected!`
            });
            console.log('error', `Send Transaction: Wallet not connected!`);
            return;
        }
        // const pubKey = new PublicKey("7BzGMomgbswT6ynUmbkqA2mh2h9oGNgfKwfR2GrEmvRT");
        let signature = '';
        try {
            const destAddress = _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Keypair.generate().publicKey;
            // anything below this will fail, as this would be below the rent-exemption rate.
            const amount = 1000000;
            console.log(amount);
            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: destAddress,
                lamports: amount
            }));
            signature = await sendTransaction(transaction, connection);
            await connection.confirmTransaction(signature, 'confirmed');
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
                type: 'success',
                message: 'Transaction successful!',
                txid: signature
            });
        } catch (error) {
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h)({
                type: 'error',
                message: `Transaction failed!`,
                description: error?.message,
                txid: signature
            });
            console.log('error', `Transaction failed! ${error?.message}`, signature);
            return;
        }
    }, [
        publicKey,
        _utils_notifications__WEBPACK_IMPORTED_MODULE_3__/* .notify */ .h,
        connection,
        sendTransaction
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "group w-60 m-2 btn animate-pulse disabled:animate-none bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-pink-500 hover:to-yellow-500 ... ",
            onClick: onClick,
            disabled: !publicKey,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden group-disabled:block ",
                    children: "Wallet not connected"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "block group-disabled:hidden",
                    children: "Send Transaction"
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7061:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9810);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([immer__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_0__]);
([immer__WEBPACK_IMPORTED_MODULE_1__, zustand__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);


const useNotificationStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get)=>({
        notifications: [],
        set: (fn)=>set((0,immer__WEBPACK_IMPORTED_MODULE_1__["default"])(fn))
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useNotificationStore);

});

/***/ }),

/***/ 2405:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const useUserSOLBalanceStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, _get)=>({
        balance: 0,
        getUserSOLBalance: async (publicKey, connection)=>{
            let balance = 0;
            try {
                balance = await connection.getBalance(publicKey, 'confirmed');
                balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL;
            } catch (e) {
                console.log(`error getting balance: `, e);
            }
            set((s)=>{
                s.balance = balance;
                console.log(`balance updated, `, balance);
            });
        }
    })
);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserSOLBalanceStore);

});

/***/ }),

/***/ 6654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ notify)
/* harmony export */ });
/* harmony import */ var _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7061);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__]);
_stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

function notify(newNotification) {
    const { notifications , set: setNotificationStore ,  } = _stores_useNotificationStore__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getState */ .Z.getState();
    setNotificationStore((state)=>{
        state.notifications = [
            ...notifications,
            {
                type: 'success',
                ...newNotification
            }, 
        ];
    });
}

});

/***/ }),

/***/ 917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BasicsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9950);
/* harmony import */ var _components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3535);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1247);
/* harmony import */ var _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2405);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__, _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__]);
([_components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__, _components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__, _stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




// Wallet

// Store

const BasicsView = ({})=>{
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useWallet)();
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.useConnection)();
    const balance = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)((s)=>s.balance
    );
    const { getUserSOLBalance  } = (0,_stores_useUserSOLBalanceStore__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (wallet.publicKey) {
            console.log(wallet.publicKey.toBase58());
            getUserSOLBalance(wallet.publicKey, connection);
        }
    }, [
        wallet.publicKey,
        connection,
        getUserSOLBalance
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: "Wallet"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center",
                    children: [
                        wallet.publicKey && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "Public Key: ",
                                wallet.publicKey.toBase58()
                            ]
                        }),
                        wallet && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "SOL Balance: ",
                                (balance || 0).toLocaleString()
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RequestAirdrop__WEBPACK_IMPORTED_MODULE_2__/* .RequestAirdrop */ .E, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SendTransaction__WEBPACK_IMPORTED_MODULE_3__/* .SendTransaction */ .i, {})
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 6640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1024);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4147);
/* harmony import */ var _utils_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6654);
/* harmony import */ var _idl_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7707);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_notifications__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__]);
([_utils_notifications__WEBPACK_IMPORTED_MODULE_6__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);

// Next, React

// Wallet

 // Import Solana libraries

// Components



const { Keypair  } = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.web3;
const HomeView = ({})=>{
    // let _baseAccount = null;
    const { 0: _baseAccount , 1: set_baseAccount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: counter , 1: setCounter  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: updateNumber , 1: setUpdateNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useAnchorWallet)();
    function getProvider() {
        if (!wallet) {
            return null;
        }
        const network = "https://api.testnet.solana.com";
        const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(network, "processed");
        const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.AnchorProvider(connection, wallet, {
            "preflightCommitment": "processed"
        });
        return provider;
    }
    async function createCounter() {
        const provider = getProvider();
        const baseAccount = Keypair.generate();
        if (!provider) {
            throw "Provider is null";
        }
        const a = JSON.stringify(_idl_json__WEBPACK_IMPORTED_MODULE_7__);
        const b = JSON.parse(a);
        const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.Program(b, _idl_json__WEBPACK_IMPORTED_MODULE_7__.metadata.address, provider);
        // console.log("baseAccount", baseAccount.publicKey.toString());
        // console.log("user", provider.wallet.publicKey.toString());
        // console.log("systemProgram", web3.SystemProgram.programId.toString())
        // console.log(program)
        try {
            // const transaction = await program.methods.initialize()
            // .accounts({
            //   accounts: {
            //     myAccount: baseAccount.publicKey,
            //     user: provider.wallet.publicKey,
            //     systemProgram: web3.SystemProgram.programId,
            //       },
            //     })
            //     .signers([baseAccount])
            // .rpc();
            const transaction = await program.rpc.initialize({
                accounts: {
                    myAccount: baseAccount.publicKey,
                    user: provider.wallet.publicKey,
                    systemProgram: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.web3.SystemProgram.programId
                },
                signers: [
                    baseAccount
                ]
            });
            console.log("Transaction", transaction);
            // Confirm the transaction
            const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
            console.log("Transaction confirmed:", confirmation);
            const account = await program.account.myAccount.fetch(baseAccount.publicKey);
            console.log("Account", account.data.toString());
            setCounter(account.data.toString());
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'success',
                message: 'Counter initialized!',
                txid: transaction
            });
        } catch (e) {
            console.log(e);
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'error',
                message: `Counter failed to initialize!`,
                description: e?.message,
                txid: ""
            });
        }
        set_baseAccount(baseAccount);
    }
    async function incrementCounter() {
        const provider = getProvider();
        const baseAccount = _baseAccount;
        if (!provider) {
            throw "Provider is null";
        }
        const a = JSON.stringify(_idl_json__WEBPACK_IMPORTED_MODULE_7__);
        const b = JSON.parse(a);
        const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.Program(b, _idl_json__WEBPACK_IMPORTED_MODULE_7__.metadata.address, provider);
        try {
            const transaction = await program.rpc.increment({
                accounts: {
                    myAccount: baseAccount.publicKey
                }
            });
            console.log("Transaction", transaction);
            // Confirm the transaction
            const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
            // Get the data
            const account = await program.account.myAccount.fetch(baseAccount.publicKey);
            setCounter(account.data.toString());
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'success',
                message: 'Counter incremented!',
                txid: transaction
            });
        } catch (e) {
            console.log(e);
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'error',
                message: `Counter failed to increment!`,
                description: e?.message,
                txid: ""
            });
        }
        set_baseAccount(baseAccount);
    }
    async function decrementCounter() {
        const provider = getProvider();
        const baseAccount = _baseAccount;
        if (!provider) {
            throw "Provider is null";
        }
        const a = JSON.stringify(_idl_json__WEBPACK_IMPORTED_MODULE_7__);
        const b = JSON.parse(a);
        const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.Program(b, _idl_json__WEBPACK_IMPORTED_MODULE_7__.metadata.address, provider);
        try {
            const transaction = await program.rpc.decrement({
                accounts: {
                    myAccount: baseAccount.publicKey
                }
            });
            // Confirm the transaction
            const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
            // Get the data
            const account = await program.account.myAccount.fetch(baseAccount.publicKey);
            setCounter(account.data.toString());
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'success',
                message: 'Counter decremented!',
                txid: transaction
            });
        } catch (e) {
            console.log(e);
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'error',
                message: `Counter failed to decrement!`,
                description: e?.message,
                txid: ""
            });
        }
        set_baseAccount(baseAccount);
    }
    async function updateCounter() {
        const provider = getProvider();
        const baseAccount = _baseAccount;
        if (!provider) {
            throw "Provider is null";
        }
        const a = JSON.stringify(_idl_json__WEBPACK_IMPORTED_MODULE_7__);
        const b = JSON.parse(a);
        const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.Program(b, _idl_json__WEBPACK_IMPORTED_MODULE_7__.metadata.address, provider);
        try {
            const transaction = await program.rpc.update(new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_4__.BN(updateNumber), {
                accounts: {
                    myAccount: baseAccount.publicKey
                }
            });
            // Confirm the transaction
            const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
            // Get the data
            const account = await program.account.myAccount.fetch(baseAccount.publicKey);
            setCounter(account.data.toString());
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'success',
                message: 'Counter updated!',
                txid: transaction
            });
        } catch (e) {
            console.log(e);
            (0,_utils_notifications__WEBPACK_IMPORTED_MODULE_6__/* .notify */ .h)({
                type: 'error',
                message: `Counter failed to update!`,
                description: e?.message,
                txid: ""
            });
        }
        set_baseAccount(baseAccount);
    }
    function handleInputChange(event) {
        setUpdateNumber(event.target.value);
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "md:hero mx-auto p-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "md:hero-content flex flex-col",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: [
                        "Counter ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-sm font-normal align-top text-slate-700",
                            children: [
                                "v",
                                _package_json__WEBPACK_IMPORTED_MODULE_5__/* .version */ .i8
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: "md:w-full text-center text-slate-300 my-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Simple app to test out Solana"
                        }),
                        "Make sure you are on Test Network"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]",
                    children: counter ? counter : null
                }),
                !_baseAccount ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: createCounter,
                    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                    children: "Start"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: 'flex flex-wrap gap-4 ',
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: 'w-full gap-4 flex',
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: incrementCounter,
                                    className: "w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                    children: "+"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: decrementCounter,
                                    className: "w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                    children: "-"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: 'flex flex-wrap pt-4 w-full border-t',
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: updateNumber,
                                    onChange: handleInputChange,
                                    placeholder: "Enter number for counter",
                                    type: "number",
                                    className: 'border-t border-gray-100 mb-4 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: updateCounter,
                                    className: "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                                    disabled: !updateNumber,
                                    children: "Update"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

});

/***/ }),

/***/ 7920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "W": () => (/* reexport safe */ _basics__WEBPACK_IMPORTED_MODULE_1__.W)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6640);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(917);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_basics__WEBPACK_IMPORTED_MODULE_1__, _home__WEBPACK_IMPORTED_MODULE_0__]);
([_basics__WEBPACK_IMPORTED_MODULE_1__, _home__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



});

/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = {"i8":"0.1.0"};

/***/ }),

/***/ 7707:
/***/ ((module) => {

module.exports = JSON.parse('{"version":"0.1.0","name":"basic_6","instructions":[{"name":"initialize","accounts":[{"name":"myAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"update","accounts":[{"name":"myAccount","isMut":true,"isSigner":false}],"args":[{"name":"data","type":"u64"}]},{"name":"increment","accounts":[{"name":"myAccount","isMut":true,"isSigner":false}],"args":[]},{"name":"decrement","accounts":[{"name":"myAccount","isMut":true,"isSigner":false}],"args":[]}],"accounts":[{"name":"MyAccount","type":{"kind":"struct","fields":[{"name":"data","type":"u64"}]}}],"metadata":{"address":"HEZSGK5gWyBHvbZ187VS13a3YeQm7NVMiYLeKCMD4ZJS"}}');

/***/ })

};
;