<template>
  <div class="data" v-if='serverdata'>
    <cpu-component :data="serverdata.cpu"></cpu-component>
    <ram-component :data="serverdata.mem"></ram-component>
    <disks-component :data="serverdata.disks"></disks-component>
    <temp-component :data="serverdata.temps"></temp-component>
  </div>
</template>

<script>
import CpuComponent from './components/CPU.vue'
import RamComponent from './components/RAM.vue'
import TempComponent from './components/Temps.vue'
import DisksComponent from './components/Disks.vue'
export default {
  name: 'App',
  components: {
    CpuComponent,
    RamComponent,
    TempComponent,
    DisksComponent
  },
  data:function(){
    return{
      connection:null,
      serverdata: {}
    }
  },
  methods:{
    fixJSON(json){
      function bulkRegex(str, callback){
          if(callback && typeof callback === 'function'){
              return callback(str);
          }else if(callback && Array.isArray(callback)){
              for(let i = 0; i < callback.length; i++){
                  if(callback[i] && typeof callback[i] === 'function'){
                      str = callback[i](str);
                  }else{break;}
              }
              return str;
          }
          return str;
      }
      // console.log(json)
      if(json && json !== ''){
          if(typeof json !== 'string'){
              try{
                  json = JSON.stringify(json);
              }catch(e){return false;}
          }
          if(typeof json === 'string'){
              json = bulkRegex(json, false, [
                  str => str.replace(/[\n\t]/gm, ''),
                  str => str.replace(/,\}/gm, '}'),
                  str => str.replace(/,\]/gm, ']'),
                  str => {
                      str = str.split(/(?=[,\}\]])/g);
                      str = str.map(s => {
                          if(s.includes(':') && s){
                              let strP = s.split(/:(.+)/, 2);
                              strP[0] = strP[0].trim();
                              if(strP[0]){
                                  let firstP = strP[0].split(/([,\{\[])/g);
                                  firstP[firstP.length-1] = bulkRegex(firstP[firstP.length-1], false, p => p.replace(/[^A-Za-z0-9\-_]/, ''));
                                  strP[0] = firstP.join('');
                              }
                              let part = strP[1].trim();
                              if((part.startsWith('"') && part.endsWith('"')) || (part.startsWith('\'') && part.endsWith('\'')) || (part.startsWith('`') && part.endsWith('`'))){
                                  part = part.substr(1, part.length - 2);
                              }
                              part = bulkRegex(part, false, [
                                  p => p.replace(/(["])/gm, '\\$1'),
                                  p => p.replace(/\\'/gm, '\''),
                                  p => p.replace(/\\`/gm, '`'),
                              ]);
                              strP[1] = ('"'+part+'"').trim();
                              s = strP.join(':');
                          }
                          return s;
                      });
                      return str.join('');
                  },
                  str => str.replace(/(['"])?([a-zA-Z0-9\-_]+)(['"])?:/g, '"$2":'),
                  str => {
                      str = str.split(/(?=[,\}\]])/g);
                      str = str.map(s => {
                          if(s.includes(':') && s){
                              let strP = s.split(/:(.+)/, 2);
                              strP[0] = strP[0].trim();
                              if(strP[1].includes('"') && strP[1].includes(':')){
                                  let part = strP[1].trim();
                                  if(part.startsWith('"') && part.endsWith('"')){
                                      part = part.substr(1, part.length - 2);
                                      part = bulkRegex(part, false, p => p.replace(/(?<!\\)"/gm, ''));
                                  }
                                  strP[1] = ('"'+part+'"').trim();
                              }
                              s = strP.join(':');
                          }
                          return s;
                      });
                      return str.join('');
                  },
              ]);
              try{
                  json = JSON.parse(json);
              }catch(e){return e;}
          }
          return json;
      }
      return false;
    },
    setData(data){
      this.serverdata = this.fixJSON(data.replaceAll("'", "\""))
      console.log(this.serverdata)
    },
  },
   created() {
    let vm = this;
    this.connection = new WebSocket("ws://109.254.85.64:5555/data?key=test")
    this.connection.onmessage = function(event) {
      vm.setData(event.data)
    }
  }
   
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center
}
.card{
  width:225px;
}
.data{
  width:calc(4*300px);
  display:grid;
  grid-template-columns:repeat(4, 300px)
}
</style>
