<template>
  <div id="app">
    <div class="row">
      <form class="form-horizontal col">
        <fieldset>

          <legend>Create new Class</legend>

          <div class="form-group">
            <label class="col-lg-12 control-label">Metadata URL</label>  
            <div class="col-lg-12">
            <input type="text" placeholder="https://ipfs.io/ipfs/hash" v-model="metadata" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Name</label>  
            <div class="col-lg-12">
            <input type="text" placeholder="Name" v-model="name" class="form-control input-md">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Description</label>
            <div class="col-lg-12">                     
              <textarea class="form-control" v-model="description" placeholder="Description"></textarea>
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Royalty</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Royalty" v-model="royalty" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">NFT Property</label>
            <div class="col-lg-12">
              <select class="form-control" v-model="property">
                <option value="1">Transferrable</option>
                <option value="2">Burnable</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Category</label>
            <div class="col-lg-12">
              <select class="form-control" v-model="categoryId">
                <option value="1">Art</option>
                <option value="2">Music</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-12">
              <button @click="createClass" class="btn btn-primary">Button</button>
            </div>
          </div>

        </fieldset>
      </form>
      <form class="form-horizontal col">
        <fieldset>

          <legend>Proxy Mint</legend>

          <div class="form-group">
            <label class="col-lg-12 control-label">Mint To Account</label>  
            <div class="col-lg-12">
            <input type="text" placeholder="Account ID" v-model="accountMint" class="form-control input-md">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Class Id</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Class ID" v-model="classId" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Metadata URL</label>  
            <div class="col-lg-12">
            <input type="text" placeholder="https://ipfs.io/ipfs/hash" v-model="metadataMint" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Quantity</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Quantity" v-model="quantity" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Charge Royalty</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Charge Royalty" v-model="royaltyMint" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-12">
              <button @click="proxyMint" class="btn btn-primary">Button</button>
            </div>
          </div>

        </fieldset>
      </form>
      <form class="form-horizontal col" v-if="property == 1">
        <fieldset>

          <legend>Transfer</legend>

          <div class="form-group">
            <label class="col-lg-12 control-label">Transfer To Account</label>  
            <div class="col-lg-12">
            <input type="text" placeholder="Account ID" v-model="accountTransfer" class="form-control input-md">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Class ID</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Class ID" v-model="classIdTransfer" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Token ID</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Token ID" v-model="tokenIdTransfer" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Token Quantity</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Token Quantity" v-model="tokenQuantity" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-12">
              <button @click="transfer" class="btn btn-primary">Button</button>
            </div>
          </div>

        </fieldset>
      </form>
      <form class="form-horizontal col" v-if="property == 2">
        <fieldset>

          <legend>Burn</legend>

          <div class="form-group">
            <label class="col-lg-12 control-label">Class ID</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Class ID" v-model="classIdBurn" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Token ID</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Token ID" v-model="tokenIdBurn" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <label class="col-lg-12 control-label">Token Quantity</label>  
            <div class="col-lg-12">
            <input type="number" placeholder="Token Quantity" v-model="tokenQuantityBurn" class="form-control input-lg">
            </div>
          </div>

          <div class="form-group">
            <div class="col-md-12">
              <button @click="burn" class="btn btn-primary">Button</button>
            </div>
          </div>

        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import types from "./types.json"
import { Keyring } from "@polkadot/keyring"
import { ApiPromise, WsProvider } from "@polkadot/api"

// eslint-disable-next-line
import { queryClassByClassId, queryTokenByClassIdAndTokenId, queryTokenByOwner } from "@/lib/polkadot-providers/queries/ormlNft"
import { createClass, proxyMint, transfer, burn } from "@/lib/polkadot-providers/commands/unetNft"

export default {
  name: 'App',
  
  data: () => ({
    api: null,
    pair: null,
    metadata: '',
    name: '',
    description: '',
    royalty: '',
    property: '1',
    categoryId: '1',
    accountMint: '',
    classId: '',
    metadataMint: '',
    quantity: '',
    royaltyMint: '',
    accountTransfer: '',
    classIdTransfer: '',
    tokenIdTransfer: '',
    tokenQuantity: '',
    classIdBurn: '',
    tokenIdBurn: '',
    tokenQuantityBurn: ''
  }),
  
  async mounted() {
    const wsProvider = new WsProvider('ws://127.0.0.1:9944')
    this.api = await ApiPromise.create({
      provider: wsProvider,
      types: types
    })

    const keyring = new Keyring({ type: 'sr25519' });
    this.pair = keyring.addFromUri('//Alice', { name: 'Alice default' });
  },

  methods: {
    async createClass(e) {
      e.preventDefault();
      await createClass(
        this.api,
        this.pair,
        this.metadata,
        this.name,
        this.description,
        this.royalty,
        this.property,
        this.categoryId,
        () => {
          alert('Class created!')
        }
      )
    },
    
    async proxyMint(e) {
      e.preventDefault();
      await proxyMint(
        this.api,
        this.pair,
        this.accountMint,
        this.classId,
        this.metadataMint,
        this.quantity,
        this.chargeRoyalty,
        () => {
          alert('Finished minting!')
        }
      )
    },
    
    async transfer(e) {
      e.preventDefault();
      await transfer(
        this.api,
        this.pair,
        this.accountTransfer,
        (
          this.classIdTransfer,
          this.tokenIdTransfer,
          this.tokenQuantity
        ),
        () => {
          alert('Finished transfer!')
        }
      )
    },
    
    async burn(e) {
      e.preventDefault();
      await burn(
        this.api,
        this.pair,
        this.classIdBurn,
        this.tokenIdBurn,
        this.tokenQuantityBurn,
        () => {
          alert('Finished burn!')
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
