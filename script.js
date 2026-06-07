*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    overflow:hidden;
    font-family:Arial, sans-serif;
}

.toolbar{
    position:fixed;
    top:10px;
    left:10px;
    z-index:9999;
    display:flex;
    gap:10px;
}

.toolbar button{
    padding:10px 15px;
    font-size:18px;
    cursor:pointer;
}

#viewport{
    width:100vw;
    height:100vh;
    overflow:hidden;
    background:#f0f0f0;
}

#panzoom-element{
    width:1600px;
    height:1200px;
}

iframe{
    width:1600px;
    height:1200px;
    border:none;
}
