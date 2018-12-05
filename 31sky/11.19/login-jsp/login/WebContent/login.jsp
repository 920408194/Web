<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="robots" content="noindex">
    <title>login</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
  <script type="text/javascript" src="login.js"></script>
  


    <div class="loginPageRight">
      <div class="loginPageRightTitle">请输入您的登录信息</div>
      <form action="Jump.jsp">
	      <input name="name" id="mobile" class="input" type="tel" style="margin: 30px auto;" placeholder="请输入您的账户" onblur="checkMobile()" />
	      <input name="pwd" id="pwd" class="input" type="password" style="outline:none; margin: 30px auto;" placeholder="请输入密码" onblur="checkPwd()" />
	      <div class="forget">
	        <span id="errorMsg" style="color: red;margin-right: 90px;"></span>
	        忘记密码？
	      </div>
	      <button type="submit" class="button" style="background: #ff9900;color: #fff">登录</button>
      </form>
      <button class="button" style="border:  1px solid #dfdfdf; background: #fff" onclick="window.location.href='register.jsp'">注册</button>
    </div>

  

  <!-- background pikaqu-->
    <div id="container" style="margin-top: 256px;">
      <div id="nose"></div>
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
      <div class="upperLip"></div>
      <div class="lowerLip-wrapper">
        <div class="lowerLip"></div>
      </div>
      <div class="face face-left"></div>
      <div class="face face-right"></div>

    </div>

</body>
</html>