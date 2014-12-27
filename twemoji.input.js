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
        customTextarea = document.createElement('div'),
        box = document.createElement('div');
        
        
    /* Descriptional Part */
    
    function wrap(){
        wrapper.className = prefix + '_wrap';
        box.className = prefix + '_box';
        popover.className = prefix + '_popover';
        listWrap.className = prefix + '_list_wrap';
        customTextarea.className = prefix + '_textarea';

        customTextarea.setAttribute('contenteditable','true');

        list.style.height = (Emoji.length/5)*size + 'px';

        obj.parentNode.insertBefore(wrapper, obj); 

        wrapper.appendChild(obj);
        wrapper.appendChild(customTextarea);
        wrapper.appendChild(box);
        wrapper.appendChild(popover);
        popover.appendChild(listWrap);
        listWrap.appendChild(list);
    }
    
    function insertAtCursor(myField, myValue) {
        //Fn's Author: http://jsfiddle.net/Znarkus/Z99mK/
        //IE support
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.innerHTML = myValue;
        }
        //MOZILLA and others
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            myField.innerHTML = myField.value.substring(0, startPos)
                + myValue
                + myField.value.substring(endPos, myField.value.length);
            myField.selectionStart = startPos + myValue.length;
            myField.selectionEnd = startPos + myValue.length;
        } else {
            myField.innerHTML += myValue;
        }
    }
    
    function updateList(listSize){
        var l = Emoji.length,
            w = popover.offsetWidth,
            h = popover.offsetHeight,
            listSize = listSize || 25,
            listLength = list.children.length;
        
        for(var i = listLength; i<listSize; i++){
            var listItem = document.createElement('li'),
                parsedTwemoji = twemoji.parse(Emoji[i]);
            
            list.appendChild(listItem);
            listItem.innerHTML = parsedTwemoji;
            listItem.onclick = function(e){
                var alt = this.children[0].attributes['alt'].value;
                
                insertAtCursor(customTextarea, twemoji.parse(alt));
                updTextarea();
                
                if(!e.ctrlKey){
                    toggleBox()
                }
            }
          }
        }
    
    
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
         
         wrap.style.width = options ? options.width+'px' : '150px';
         wrap.style.height = slave.style.height = options ? options.height+'px' : '150px';
         master.style.height = options ? options.height+20+'px' : '170px';
         slave.style.width = options ? options.width-20 +'px' : '130px';
         
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
         }
         
         master.onscroll = function(e){
             moveScroll();
             slave.scrollTop = master.scrollTop;
             options.onscroll(master.scrollTop);
         }
         
         slave.onscroll = function(){
             master.scrollTop = slave.scrollTop;
             options.onscroll(slave.scrollTop);
         }
         
     };
    
     function init(){
        wrap();
        updateList();
        customTextarea.innerHTML = twemoji.parse(obj.value);
         var scrollList = new customScroll(list, {
                                           width: 185,
                                           height: 150,
             onscroll: function(scrollTop){    //Render emoji only when it needs 
        var listSize = (parseInt(scrollTop/size)*5)+25;//5 rows and 5 cols = 25 items
        updateList(listSize);
                 console.log(listSize)
    }
                                           });
    }
    
    /* Application Part */
    

    
    function updTextarea(e, customVal){
        var val = customVal || customTextarea.innerHTML;
        val = saveAsImg ? val : val.replace(/<img.*?alt=".*?/g,'').replace(/".?src=.*?>/g,'');
        obj.value = val;
    }
    
    function toggleBox(){
        var currentClass = wrapper.className;
        if(currentClass.match('__open','g')){
            wrapper.className = currentClass.replace(/ __open/g,'')
        } else {
            wrapper.className += ' __open';
        }
    }
    
    customTextarea.onkeyup = updTextarea;
    customTextarea.onblur = updTextarea;
    
    box.onclick = function(e){
        e.preventDefault();
        toggleBox();
    }
    
    document.onclick = function(e){
        if(e.target != box && e.target != wrap && e.target != list && !e.ctrlKey){
            wrapper.className = wrapper.className.replace(/ __open/g,'');
        }
    }
    
    init();
    
    return customTextarea;
};