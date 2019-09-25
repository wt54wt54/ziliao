export default {
  songUrl(songmid){
     var songmid=songmid||'003NGKTc2tabpb'                                                          
    let url=`http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400${songmid}.m4a?guid=6495369018&vkey=87202258E525A2FF5CDBCDDAF776F34F181049401FB2F2C6AD8A10D45873DDC1E791EA6F87F7766EA1194B5309DA19CD6AEE8C7962E5CAB3&uin=0&fromtag=38`
             
    return url
  }
}