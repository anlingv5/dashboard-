var map = new BMap.Map("ChinaMap",{minZoom:5,maxZoom:14});          // 创建地图实例  
var point = new BMap.Point(108.95148,34.28184);  // 创建点坐标  
// var b = new BMap.Bounds(new BMap.Point(116.027143, 39.772348),new BMap.Point(116.832025, 40.126349));



map.centerAndZoom(point, 5);
map.enableScrollWheelZoom(true);  
map.setMapStyle({styleJson:[
          {
                    "featureType": "all",
                    "elementType": "all",
                    "stylers": {
                              "lightness": 10,
                              "saturation": -100
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "geometry",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "highway",
                    "elementType": "labels.icon",
                    "stylers": {
                              "visibility": "off"
                    }
          },
          {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": {}
          }
]})

function fSetMapData(Datas,Max) {
    heatmapOverlay = new BMapLib.HeatmapOverlay({ "radius": 20 });
    map.addOverlay(heatmapOverlay);
    heatmapOverlay.setDataSet({ data: Datas, max:Max });
    heatmapOverlay.show();
}

function fGetselectedData(){
    for(var i=0;i<overlays.length;i++)
    {
        document.log(overlays[i]);
    }
}
    // 创建右键菜单
    var removeMarker = function(e,ee,marker){
		map.removeOverlay(marker);
	}



     var overlays = [];
	 var overlaycomplete = function(e){
        var markerMenu=new BMap.ContextMenu();
        markerMenu.addItem(new BMap.MenuItem('删除',removeMarker.bind(e.overlay)));
        e.overlay.addContextMenu(markerMenu);
        overlays.push(e.overlay);
     };

     var styleOptions = {
        strokeColor:"#cccccc",    //边线颜色。
        fillColor:"#dddddd",      //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 3,       //边线的宽度，以像素为单位。
        strokeOpacity: 0.8,	   //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6,      //填充的透明度，取值范围0 - 1。
        strokeStyle: 'solid' //边线的样式，solid或dashed。
    }


    //实例化鼠标绘制工具
     var drawingManager = new BMapLib.DrawingManager(map, {
         isOpen: 1, //是否开启绘制模式
         enableDrawingTool: 1, //是否显示工具栏
         drawingToolOptions: {
             anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
             offset: new BMap.Size(0, 0), //偏离值
             drawingModes: [
                 BMAP_DRAWING_CIRCLE,
             ],
         },
         circleOptions: styleOptions, //圆的样式
         polylineOptions: styleOptions, //线的样式
         polygonOptions: styleOptions, //多边形的样式
         rectangleOptions: styleOptions //矩形的样式
     });


    drawingManager.setDrawingMode(BMAP_DRAWING_CIRCLE);
    
    
     
    drawingManager.addEventListener('overlaycomplete', overlaycomplete);







    