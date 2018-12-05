	function regist(){
		var a;
		var tel = document.getElementById("tel").value;
		if (tel>20000000000||tel<10000000000||isNaN(tel)) {
			document.getElementById("demo").innerHTML="请输入正确的手机号！"
		}
		else{
			document.getElementById("demo").innerHTML=""
			a = 1;
		}

		var b;
		var y = document.getElementById("yzm").value;
		if(y==""||isNaN(y))
			document.getElementById("demo1").innerHTML="请设置密码！"
		else{
			document.getElementById("demo").innerHTML=""
			b = 1;
		}

		var c;
		if(document.getElementById("check").checked)
			c = 1;
		if(c != 1)
			alert("请同意服务协议！")

		if(a+b+c == 3)
		{
			document.getElementById("registPage1").style.display = "none"
			document.getElementById("registPage2").style.display = "block"
		}
	}

	function miss(){
		alert("糟糕！文档消失了。")
	}

	function displaySubMenu(li) { 
		var subMenu = li.getElementsByTagName("ul")[0]; 
		subMenu.style.display = "block"; 
	} 
	function hideSubMenu(li) { 
		var subMenu = li.getElementsByTagName("ul")[0]; 
		subMenu.style.display = "none"; 
	}


var loginBtn = document.getElementsByClassName("button")[0];
			
function checkMobile(){
	var mobile = document.getElementById("mobile").value;
	if(mobile == ""){
		document.getElementById("errorMsg").innerHTML = "手机号不允许为空"
	}
}
function checkPwd(){
	var pwd = document.getElementById("pwd").value;
	if(pwd == "")
		document.getElementById("errorMsg").innerHTML = "密码不允许为空"
}

function login(){
	document.getElementsByClassName("dialog-bg")[0].style.display = "block"
}

function photo(){
	document.getElementsByClassName("waterfall")[0].style.display = "block"
	document.getElementsByClassName("page")[0].style.display = "none"
}
function page() {
	document.getElementsByClassName("waterfall")[0].style.display = "none"
	document.getElementsByClassName("page")[0].style.display = "block"
}




/*

pwd.addEventListener("blur",function(){
	checkPwd(this.value)
});
mobile.addEventListener("blur",function(){
	checkMobile(this.value)
});
			
loginBtn.addEventListener("click",function(){
	if (checkMobile(mobile.value) &&  checkPwd(pwd.value)){
		//TODO 
		if (mobile.value == "18611112222" && pwd.value == "111111"){
			document.getElementsByClassName("dialog-bg")[0].style.display = "block"
		} else {
			errorMsg.innerHTML = "密码错误"
		}
	}
})

document.getElementById("dialog-btn").addEventListener("click",function(){
	document.getElementsByClassName("dialog-bg")[0].style.display = "none"
});

*/