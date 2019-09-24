export default {
  songUrl(songmid){
     var songmid=songmid||'003NGKTc2tabpb'                                                          
    let url=`http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400${songmid}.m4a?guid=8022973566&vkey=A72C20CD8CE3D4AA5FD0E8A9E5809C1EF33CCD700FDDB7CB75ABEA644F379CBA6E93E290DA93E97EDC87947B4C4D7CEC1E35FC0CB0D7D6FF&uin=0&fromtag=38`
    return url
  }
}