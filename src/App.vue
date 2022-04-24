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
    <div class="row">
      <div class="form-horizontal col">
        <legend>Data</legend>
        <div v-for="c in classes" :key="c.id">
          <h5>Full Class JSON: </h5>
          <h6> {{ c }}</h6>
          <br/>
          <div v-for="t in c.tokens" :key="t.id">
            <h6>Full Token JSON: <br/> {{ t }}</h6>
          </div>
          <br/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import types from "./types.json"
import { Keyring } from "@polkadot/keyring"
import { ApiPromise, WsProvider } from "@polkadot/api"

// eslint-disable-next-line
import { queryNextClassId, queryNextTokenId, queryClassByClassId, queryTokenByClassIdAndTokenId } from "@/lib/polkadot-providers/queries/ormlNft"
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
    tokenQuantityBurn: '',
    classes: []
  }),
  
  async mounted() {
    const wsProvider = new WsProvider('ws://127.0.0.1:9944')
    this.api = await ApiPromise.create({
      provider: wsProvider,
      types: types
    })

    const keyring = new Keyring({ type: 'sr25519' });
    this.pair = keyring.addFromUri('//Alice', { name: 'Alice default' });

    await this.getData();
  },

  methods: {
    async getData() {
      this.classes = [];
      const nextClassId = await queryNextClassId(this.api);

      for(let i = 1; i < nextClassId; i++) {
        const classObj = await queryClassByClassId(this.api, i);
        classObj.tokens = [];
        const nextTokenId = await queryNextTokenId(this.api, i);

        for (let j = 0; j < nextTokenId; j++) {
          const token = await queryTokenByClassIdAndTokenId(this.api, i, j);
          classObj.tokens.push(token);
        }

        this.classes.push(classObj);
      }
    },

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
        async () => {
          alert('Class created!')
          await this.getData();
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
        async () => {
          alert('Finished minting!')
          await this.getData();
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
        async () => {
          alert('Finished transfer!')
          await this.getData(); 
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
        async () => {
          alert('Finished burn!')
          await this.getData();
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
