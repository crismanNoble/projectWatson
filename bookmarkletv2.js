function createJobistBookmarklet(){ 
    
var _body = document.getElementsByTagName('body') [0];
var bookmarklet = document.createElement('div');
    //_div.style.background = 'black';
    //_div.style.border = '5px solid red';
    bookmarklet.id = "jobistBookmarklet";
    bookmarklet.innerHTML = "<div id=\"jobistHead\"></div>";
    
var bookmarkletContent = document.createElement('form');
    bookmarkletContent.id = 'jobistSubmitNewSite';
var bcHTML = '<fieldset><br/>';
    bcHTML = bcHTML + '<span class=\"jobistLabel\">Submit this site.</span>';
    bcHTML = bcHTML + '<a class=\"jobistHelp\" href=\"\">help?</a><br/><br/>';
    bcHTML = bcHTML + '<label class=\"jobistLabel\" for=\"title\">Website Name:</label>';
    bcHTML = bcHTML + '<input type=\"text\" class=\"jobistInput\" id=\"title\" name=\"title\" value=\"\">';
    bcHTML = bcHTML + '<label class=\"jobistLabel\" for=\"url\">Website URL:</label><input type=\"text\" class=\"jobistInput\" id=\"url\" name=\"url\" value="">';
    bcHTML = bcHTML + '<label class=\"jobistLabel\" for=\"description\">Description:</label><textarea class=\"jobistInput\" id=\"description\" name=\"description\"></textarea>';
    bcHTML = bcHTML + '<button type="submit" id="jobistSubmit" class="jobistBtn">Submit Site</button><button class="jobistBtn" id="jobistCancel">Cancel / Close</button></fieldset></form></div>';
    
    bookmarkletContent.innerHTML = bcHTML;
    
    
var _button = document.createElement('button');
    _button.innerHTML = 'submit';
    
//_div.appendChilid(_input);
//_div.appendChild(_button);
_body.appendChild(bookmarklet);
bookmarklet.appendChild(bookmarkletContent);
    
var css = document.createElement("style");
css.type = "text/css";
    css.innerHTML = "#jobistBookmarklet{font-family:Helvetica, Arial, sans-serif;width:240px;background:#f2f2f2;position:fixed;top:20px;right:20px;color:#333;font-size:13px;font-weight:400;line-height:18px;}#jobistHead{height:45px;background:#333;background-image:url(http://placehold.it/120x20);background-repeat:no-repeat;background-position:20px 12px;-webkit-border-radius:8px 8px 0 0;-moz-border-radius:8px 8px 0 0;border-radius:8px 8px 0 0;}span.jobistLabel{font-size:16px;}.jobistLabel{margin-left:20px;padding-top:14px;font-weight:700;}.jobistInput{width:80%;padding:4px;margin-left:20px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;border:1px solid #333;background:#fff;}textarea.jobistInput{height:56px;}.jobistBtn{margin-left:20px;width:200px;height:28px;margin-top:9px;margin-bottom:0;display:inline-block;padding:4px 10px;font-size:13px;line-height:18px;color:#333;font-weight:700;text-align:center;cursor:pointer;}.jobistBtn,#jobistBookmarklet{-webkit-border-radius:9px;-moz-border-radius:9px;border-radius:9px;border:1px solid #000;}#jobistCancel{background-color:#e31c07;margin-bottom:14px;}#jobistCancel:hover{background-color:#ff1800;}#jobistSubmit{background-color:#08778c;}#jobistSubmit:hover{background-color:#00d7ff;}a.jobistHelp{font-style:italic;color:#e31c07;font-size:12px;float:right;margin-right:20px;}p.jobistHelp{margin:4px 20px 0;font-style:italic;color:#e31c07;font-size:12px;}";
    
document.body.appendChild(css);
    
}

window.onload(createJobistBookmarklet());​