function CPreloader(){var e,t,i,r,a,s,n,d,o,l;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this),s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png"),s_oSpriteLibrary.addSprite("200x200","./sprites/200x200.jpg"),s_oSpriteLibrary.addSprite("but_start","./sprites/but_start.png"),s_oSpriteLibrary.loadSprites(),l=new createjs.Container,s_oStage.addChild(l)},this.unload=function(){l.removeAllChildren(),o.unload()},this._onImagesLoaded=function(){},this._onAllImagesLoaded=function(){this.attachSprites(),s_oMain.preloaderReady()},this.attachSprites=function(){var _=new createjs.Shape;_.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),l.addChild(_);var h=s_oSpriteLibrary.getSprite("200x200");(n=createBitmap(h)).regX=.5*h.width,n.regY=.5*h.height,n.x=CANVAS_WIDTH/2,n.y=CANVAS_HEIGHT/2-130,l.addChild(n),(d=new createjs.Shape).graphics.beginFill("rgba(0,0,0,0.01)").drawRoundRect(n.x-100,n.y-100,200,200,10),l.addChild(d),n.mask=d;h=s_oSpriteLibrary.getSprite("progress_bar");(r=createBitmap(h)).x=CANVAS_WIDTH/2-h.width/2,r.y=CANVAS_HEIGHT/2+50,l.addChild(r),e=h.width,t=h.height,(a=new createjs.Shape).graphics.beginFill("rgba(0,0,0,0.01)").drawRect(r.x,r.y,1,t),l.addChild(a),r.mask=a,(i=new createjs.Text("","30px "+PRIMARY_FONT,"#fff")).x=CANVAS_WIDTH/2,i.y=CANVAS_HEIGHT/2+100,i.textBaseline="alphabetic",i.textAlign="center",l.addChild(i);h=s_oSpriteLibrary.getSprite("but_start");(o=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT/2+50,h,TEXT_PRELOADER_CONTINUE,"Arial","#000",50,l)).addEventListener(ON_MOUSE_UP,this._onButStartRelease,this),o.setVisible(!1),(s=new createjs.Shape).graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),l.addChild(s),createjs.Tween.get(s).to({alpha:0},500).call((function(){createjs.Tween.removeTweens(s),l.removeChild(s)}))},this._onButStartRelease=function(){$(s_oMain).trigger("show_preroll_ad"),s_oMain._onRemovePreloader()},this.refreshLoader=function(s){i.text=s+"%",100===s&&($(s_oMain).trigger("show_preroll_ad"),s_oMain._onRemovePreloader(),i.visible=!1,r.visible=!1),a.graphics.clear();var n=Math.floor(s*e/100);a.graphics.beginFill("rgba(0,0,0,0.01)").drawRect(r.x,r.y,n,t)},this._init()}