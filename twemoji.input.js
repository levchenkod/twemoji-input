/* Usage:

    var tmi = new TwemojiInput(document.getElementById('twemoji-textarea'));

*/


var TwemojiInput = function(obj){
    /* Declarative Part */

    var Emoji = ["🀄","🃏","🅰","🅱","🅾","🅿","🆎","🆑","🆒","🆓","🆔","🆕","🆖","🆗","🆘","🆙","🆚","🇦","🇧","🇨🇳","🇨","🇩🇪","🇩","🇪🇸","🇪","🇫🇷","🇫","🇬🇧","🇬","🇭","🇮🇹","🇮","🇯🇵","🇯","🇰🇷","🇰","🇱","🇲","🇳","🇴","🇵","🇶","🇷🇺","🇷","🇸","🇹","🇺🇸","🇺","🇻","🇼","🇽","🇾","🇿","🈁","🈂","🈚","🈯","🈲","🈳","🈴","🈵","🈶","🈷","🈸","🈹","🈺","🉐","🉑","🌀","🌁","🌂","🌃","🌄","🌅","🌆","🌇","🌈","🌉","🌊","🌋","🌌","🌍","🌎","🌏","🌐","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌙","🌚","🌛","🌜","🌝","🌞","🌟","🌠","🌰","🌱","🌲","🌳","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","🌽","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🍅","🍆","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍠","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭","🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","🍶","🍷","🍸","🍹","🍺","🍻","🍼","🎀","🎁","🎂","🎃","🎄","🎅","🎆","🎇","🎈","🎉","🎊","🎋","🎌","🎍","🎎","🎏","🎐","🎑","🎒","🎓","🎠","🎡","🎢","🎣","🎤","🎥","🎦","🎧","🎨","🎩","🎪","🎫","🎬","🎭","🎮","🎯","🎰","🎱","🎲","🎳","🎴","🎵","🎶","🎷","🎸","🎹","🎺","🎻","🎼","🎽","🎾","🎿","🏀","🏁","🏂","🏃","🏄","🏆","🏇","🏈","🏉","🏊","🏠","🏡","🏢","🏣","🏤","🏥","🏦","🏧","🏨","🏩","🏪","🏫","🏬","🏭","🏮","🏯","🏰","🐀","🐁","🐂","🐃","🐄","🐅","🐆","🐇","🐈","🐉","🐊","🐋","🐌","🐍","🐎","🐏","🐐","🐑","🐒","🐓","🐔","🐕","🐖","🐗","🐘","🐙","🐚","🐛","🐜","🐝","🐞","🐟","🐠","🐡","🐢","🐣","🐤","🐥","🐦","🐧","🐨","🐩","🐪","🐫","🐬","🐭","🐮","🐯","🐰","🐱","🐲","🐳","🐴","🐵","🐶","🐷","🐸","🐹","🐺","🐻","🐼","🐽","🐾","👀","👂","👃","👄","👅","👆","👇","👈","👉","👊","👋","👌","👍","👎","👏","👐","👑","👒","👓","👔","👕","👖","👗","👘","👙","👚","👛","👜","👝","👞","👟","👠","👡","👢","👣","👤","👥","👦","👧","👨","👩","👪","👫","👬","👭","👮","👯","👰","👱","👲","👳","👴","👵","👶","👷","👸","👹","👺","👻","👼","👽","👾","👿","💀","💁","💂","💃","💄","💅","💆","💇","💈","💉","💊","💋","💌","💍","💎","💏","💐","💑","💒","💓","💔","💕","💖","💗","💘","💙","💚","💛","💜","💝","💞","💟","💠","💡","💢","💣","💤","💥","💦","💧","💨","💩","💪","💫","💬","💭","💮","💯","💰","💱","💲","💳","💴","💵","💶","💷","💸","💹","💺","💻","💼","💽","💾","💿","📀","📁","📂","📃","📄","📅","📆","📇","📈","📉","📊","📋","📌","📍","📎","📏","📐","📑","📒","📓","📔","📕","📖","📗","📘","📙","📚","📛","📜","📝","📞","📟","📠","📡","📢","📣","📤","📥","📦","📧","📨","📩","📪","📫","📬","📭","📮","📯","📰","📱","📲","📳","📴","📵","📶","📷","📹","📺","📻","📼","🔀","🔁","🔂","🔃","🔄","🔅","🔆","🔇","🔈","🔉","🔊","🔋","🔌","🔍","🔎","🔏","🔐","🔑","🔒","🔓","🔔","🔕","🔖","🔗","🔘","🔙","🔚","🔛","🔜","🔝","🔞","🔟","🔠","🔡","🔢","🔣","🔤","🔥","🔦","🔧","🔨","🔩","🔪","🔫","🔬","🔭","🔮","🔯","🔰","🔱","🔲","🔳","🔴","🔵","🔶","🔷","🔸","🔹","🔺","🔻","🔼","🔽","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧","🗻","🗼","🗽","🗾","🗿","😀","😁","😂","😃","😄","😅","😆","😇","😈","😉","😊","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","🙅","🙆","🙇","🙈","🙉","🙊","🙋","🙌","🙍","🙎","🙏","🚀","🚁","🚂","🚃","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚋","🚌","🚍","🚎","🚏","🚐","🚑","🚒","🚓","🚔","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚝","🚞","🚟","🚠","🚡","🚢","🚣","🚤","🚥","🚦","🚧","🚨","🚩","🚪","🚫","🚬","🚭","🚮","🚯","🚰","🚱","🚲","🚳","🚴","🚵","🚶","🚷","🚸","🚹","🚺","🚻","🚼","🚽","🚾","🚿","🛀","🛁","🛂","🛃","🛄","🛅","‼","⁉","™","ℹ","↔","↕","↖","↗","↘","↙","↩","↪","#⃣","⌚","⌛","⏩","⏪","⏫","⏬","⏰","⏳","Ⓜ","▪","▫","▶","◀","◻","◼","◽","◾","☀","☁","☎","☑","☔","☕","☝","☺","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","♠","♣","♥","♦","♨","♻","♿","⚓","⚠","⚡","⚪","⚫","⚽","⚾","⛄","⛅","⛎","⛔","⛪","⛲","⛳","⛵","⛺","⛽","✂","✅","✈","✉","✊","✋","✌","✏","✒","✔","✖","✨","✳","✴","❄","❇","❌","❎","❓","❔","❕","❗","❤","➕","➖","➗","➡","➰","➿","⤴","⤵","⬅","⬆","⬇","⬛","⬜","⭐","⭕","0⃣","〰","〽","1⃣","2⃣","㊗","㊙","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","©","®",""],

        prefix = '_twemoji',
        size = 32,
        saveAsImg = false,

        list = document.createElement('ul'),
        listWrap = document.createElement('div'),
        popover = document.createElement('div'),
        wrapper = document.createElement('div'),
        customTextarea = document.createElement('iframe'),
        box = document.createElement('div'),
        lastCaretPostion = 0;

    /* Contenteditable iframe with simple API. You can access it with TwemojiInput.Editor */

    var Editor = function(){
      var t = this;

      t.init();
    };

    Editor.prototype.addStyles = function(){
      var t = this;

      t.styles = document.createElement('style');
      t.styles.setAttribute('type', 'text/css');
      t.styles.innerText = 'body{line-height: 18px;} img.emoji{height: 14px; width: 14px;}';

      t.content.head.appendChild(t.styles);
    };

    Editor.prototype.focus = function(){
      var t = this;
      t.content.body.focus();
    };

    Editor.prototype.insertImage = function(img){
      var t = this;

      function insert(){
        var id = "rand" + (Math.random() + "").slice(2),
            sel;

        if (t.content.queryCommandSupported("InsertHTML")) {
            t.content.execCommand("insertHTML", false, img);
        } else if ( (sel = t.content.selection) && sel.type != "Control") {
            var range = sel.createRange();
            range.pasteHTML(img);
            range.collapse(false);
            range.select();
        };

        t.updateMirror();

        return t.content.getElementById(id);
      };

      t.focus();

      return insert();
    };

    Editor.prototype.value = function(value){
      var t = this;

      if(value){
        t.content.body.innerHTML = value;
        t.updateMirror();
        return value;
      } else {
        return t.content.body.innerHTML;
      }
    };

    Editor.prototype.updateMirror = function(){
      var t = this,
          value = t.value();

      value = saveAsImg ? value : value.replace(/<img.*?alt=".*?/g,'').replace(/".?src=.*?>/g,'');
      t.mirror.value = value;
    };

    Editor.prototype.listenChanges = function(){
      var t = this;
      ['mouseup','touchend','keyup','blur'].map(function(event){
        t.content.body.addEventListener(event, function(){
          t.updateMirror();
        });
      });
    };

    Editor.prototype.init = function(){
      var t = this;

      t.frame = document.createElement('iframe');
      t.frame.className = prefix + '_textarea';
      t.frame.setAttribute('id','twemoji-textarea');
      t.frame.setAttribute('tabindex','-1');
      t.mirror = obj;

      t.frame.onload = function(){
        t.content = (t.frame.contentDocument || t.frame.document);
        t.content.body.setAttribute('contenteditable','true');

        t.addStyles();
        t.listenChanges();
      };
    };


    /* Descriptional Part */


    function wrap(){
      wrapper.className = prefix + '_wrap';
      box.className = prefix + '_box';
      popover.className = prefix + '_popover';
      listWrap.className = prefix + '_list_wrap';

      customTextarea = new Editor();

      list.style.height = (Emoji.length/5)*size + 'px';

      obj.parentNode.insertBefore(wrapper, obj);

      wrapper.appendChild(obj);
      wrapper.appendChild(customTextarea.frame);
      wrapper.appendChild(box);
      wrapper.appendChild(popover);
      popover.appendChild(listWrap);
      listWrap.appendChild(list);
    };


    function updateList(listSize){
      var l = Emoji.length,
          w = popover.offsetWidth,
          h = popover.offsetHeight,
          listSize = listSize || 25,
          listLength = list.children.length;

      for(var i = listLength; i<listSize; i++){
        function createItem(){
          var listItem = document.createElement('li'),
              parsedTwemoji = twemoji.parse(Emoji[i]);

          list.appendChild(listItem);
          listItem.innerHTML = parsedTwemoji;

          listItem.onclick = function(e){
              var alt = this.children[0].attributes['alt'].value;

              customTextarea.insertImage(twemoji.parse(alt));

              if(!e.ctrlKey){
                toggleBox()
              }
          }
        };

        if(Emoji[i]){
          createItem();
        }
      }

    };


     var customScroll = function(content, options){
       var wrap = document.createElement('div'),
           master = document.createElement('div'),
           slave = document.createElement('div'),
           scrollbar = document.createElement('div'),
           placeholder = document.createElement('div');

       wrap.className = 'scroll_wrap';
       master.className = 'scroll_master';
       slave.className = 'scroll_slave';
       scrollbar.className = 'scroll_bar';
       placeholder.className = 'scroll_placeholder';

       wrap.style.width = options ? options.width+'px' : '195px';
       wrap.style.height = slave.style.height = options ? options.height+'px' : '150px';
       master.style.height = options ? options.height+20+'px' : '170px';
       slave.style.width = options ? options.width +'px' : '195px';

       content.parentNode.insertBefore(wrap, content);
       wrap.appendChild(slave);
       wrap.appendChild(master);
       wrap.appendChild(scrollbar);
       slave.appendChild(content);
       master.appendChild(placeholder);

       scrollbar.style.height = (wrap.scrollHeight-30)*(wrap.scrollHeight/slave.scrollHeight)+'px';
       placeholder.style.height = (Emoji.length/5)*size+50 + 'px';//embarrassing hack

       function moveScroll(){
           var top = (wrap.scrollHeight-38)*(master.scrollTop/master.scrollHeight);
           scrollbar.style.top = top+'px';
       };

       master.onscroll = function(e){
           moveScroll();
           slave.scrollTop = master.scrollTop;
           options.onscroll(master.scrollTop);
       };

       slave.onscroll = function(){
           master.scrollTop = slave.scrollTop;
           options.onscroll(slave.scrollTop);
       };

   };

   function init(){
      var scrollList;

      wrap();
      updateList();
      customTextarea.value(twemoji.parse(obj.value));

      scrollList = new customScroll(list, {
            width: 185,
            height: 150,
            onscroll: function(scrollTop){    //Render emoji only when it needs
              var listSize = (parseInt(scrollTop/size)*5)+25;//5 rows and 5 cols = 25 items
              updateList(listSize);
            }
          });
    };



    /* Application Part */

    function toggleBox(){
      var currentClass = wrapper.className;
      if(currentClass.match('__open','g')){
        wrapper.className = currentClass.replace(/ __open/g,'')
      } else {
         wrapper.className += ' __open';
      }
    }

    box.onclick = function(e){
      e.preventDefault();
      toggleBox();
    };

    document.onclick = function(e){
      if(e.target != box && e.target != wrap && e.target != list && !e.ctrlKey){
        wrapper.className = wrapper.className.replace(/ __open/g,'');
      }
    };

    init();

    return {
      Editor: customTextarea
    };
};