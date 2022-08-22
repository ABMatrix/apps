import {
    OverrideBundleDefinition,
    RegistryTypes,
} from "@polkadot/types/types";

const TYPES_0_4: RegistryTypes = {
    AccountId: "EthereumAccountId",
    Address: "MultiAddress",
    Balance: "u128",
    RefCount: "u8",
    LookupSource: "MultiAddress",
    Account: {
        nonce: "U256",
        balance: "u128",
    },
};
const { RefCount, ...TYPES_5_5 } = TYPES_0_4;

const TYPES_6_19: RegistryTypes = {
    ...TYPES_5_5,
    BnkSignature: "[u8; 65]",
    ExtrinsicSignature: "BnkSignature",
    RoundIndex: "u32",
    TxPoolResultContent: {
        pending: "HashMap<H160, HashMap<U256, PoolTransaction>>",
        queued: "HashMap<H160, HashMap<U256, PoolTransaction>>",
    },
    TxPoolResultInspect: {
        pending: "HashMap<H160, HashMap<U256, Summary>>",
        queued: "HashMap<H160, HashMap<U256, Summary>>",
    },
    TxPoolResultStatus: {
        pending: "U256",
        queued: "U256",
    },
    Summary: "Bytes",
    PoolTransaction: {
        hash: "H256",
        nonce: "U256",
        blockHash: "Option<H256>",
        blockNumber: "Option<U256>",
        from: "H160",
        to: "Option<H160>",
        value: "U256",
        gasPrice: "U256",
        gas: "U256",
        input: "Bytes",
    },
};
const { ValidatorStatus, ...omitFields } = TYPES_6_19;
const TYPES_19_35: RegistryTypes = {
    ...omitFields,
    AuthorId: "AccountId",
    EthereumSignature: {
        r: "H256",
        s: "H256",
        v: "U8",
    },
};
const TYPES_36_36: RegistryTypes = {
    ...TYPES_19_35,
    DeviceState: {
        _enum: [
            "Stop",
            "Working"
        ]
    },
    DIdentity: {
        version: "u16",
        pk: "Vec<u8>"
    },
    Device: {
        owner: "AccountId",
        did: "DIdentity",
        report: "Vec<u8>",
        state: "DeviceState"
    },
};
const TYPES_37_42: RegistryTypes = {
    ...TYPES_36_36,
    StakingState: {
        user: "AccountId",
        locked: "Balance",
        start_time: "u64"
    },
    OnChainEvent: {
        _enum: {
            OnChainPayload: "OnChainPayload"
        }
    },
    OnChainPayload: {
        did: "DIdentity",
        proof: "Vec<u8>",
        timestamp: "u64",
        session: "BlockNumber",
        signature: "Vec<u8>"
    },
    ProviderId: "u32",
    ProviderInfo: {
        pid: "ProviderId",
        owner: "AccountId",
        devices: "Vec<DIdentity>",
        cap_pledge: "Balance",
        total_pledge: "Balance",
        score: "u128",
        available_rewards: "Balance",
        staking_user_num: "u8"
    },
    MessageOrigin: {
        _enum: {
            Pallet: "Vec<u8>",
            Did: "DIdentity",
            AccountId: "AccountId"
        }
    },
    Message: {
        sender: "MessageOrigin",
        destination: "Vec<u8>",
        payload: "Vec<u8>"
    },
};

const TYPES_43_154: RegistryTypes = {
    ...TYPES_37_42,
    CommitteeId: "u32",
    CommitteeState: {
        _enum: [
            "Creating",
            "Initializing",
            "Stop",
            "Working"
        ]
    },
    ChannelState: {
        _enum: [
            "Stop",
            "Working"
        ]
    },
    HandleConnection: {
        _enum: {
            "Cid": "CommitteeId",
            "CommitteeParam": "(u16, u16, (u128, u128), CryptoType, u8)"
        }
    },
    CryptoType: {
        _enum: [
            "Ecdsa",
            "Bls",
            "Schnorr"
        ]
    },
    Channel: {
        channel_id: "u32",
        chains: "(u16, u16)",
        info: "Vec<u8>",
        cids: "(CommitteeId, CommitteeId)",
        state: "ChannelState"
    },
    Parameters: {
        t: "u16",
        n: "u16"
    },
    Committee: {
        cid: "CommitteeId",
        epoch: "u32",
        parameters: "Parameters",
        pubkey: "Vec<u8>",
        state: "CommitteeState",
        fee: "(u128, u128)",
        crypto: "CryptoType",
        fork: "u8",
        channel_id: "u32"
    },
    TxSource: {
        chain_type: "u16",
        uid: "Vec<u8>",
        from: "Vec<u8>",
        to: "Vec<u8>",
        amount: "U256"
    },
    BlockNumber: "u32",
    TxMessage: {
        cid: "u32",
        epoch: "u32",
        sid: "u64",
        msg: "Vec<u8>",
        txsource: "TxSource",
        signature: "Vec<u8>",
        time_limit: "BlockNumber",
        choose_index: "Vec<u16>"
    },
    EpochChange: {
        msg: "Vec<u8>",
        signature: "Vec<u8>",
        pubkey: "Vec<u8>"
    },
    OnChainPayloadVRF: {
        cid: "CommitteeId",
        epoch: "u32",
        pk: "Vec<u8>",
        proof: "Vec<u8>",
        fork_id: "u8"
    },
};
export const bnkDefinitions: OverrideBundleDefinition = {
    types: [
        {
            minmax: [0, 4],
            types: TYPES_0_4,
        },
        {
            minmax: [5, 5],
            types: TYPES_5_5,
        },
        {
            minmax: [6, 19],
            types: TYPES_6_19,
        },
        {
            minmax: [19, 35],
            types: TYPES_19_35,
        },
        {
            minmax: [36, 36],
            types: TYPES_36_36,
        },
        {
            minmax: [37, 42],
            types: TYPES_37_42,
        },
        {
            minmax: [43, 154],
            types: TYPES_43_154,
        },
    ],
};

export default bnkDefinitions;
