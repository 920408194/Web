<%@ page 
	import="java.io.*"
	language="java" 
	contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <script type="text/javascript" src="login.js"></script>

	<%
        String name = request.getParameter("name");
        String pwd = request.getParameter("pwd");
        
        String FilePath = "C:/Users/jialiyi/Desktop/Users.txt";
        
        try{
        	FileWriter pw = new FileWriter(FilePath,true);
        	pw.write(name + "\r\n");
        	pw.write(pwd + "\r\n");
        	pw.close();			
        }catch(IOException e){
        	out.println(e.getMessage());
        }finally{}
        
        
    %>
    
	<div  style="background: #ffffe0;height: 566px;margin-top: 15px;width: 1200px;margin-right: auto;margin-left: auto;">
	<div style="vertical-align: middle;display: inline-block;margin-top: 280px;margin-left: 390px;">

    <div id="registPage2" class="loginPageRight">
		<div class="loginPageRightTitle">注册账号</div>
		<h1 style="margin-top: 100px;margin-left: 150px;color: #ff9900">注册成功</h1>
		<p style="text-align:center;">您的用户名是<%=name %></p>
		<p style="text-align:center;">您的密码是<%=pwd %></p>
		<a href="login.jsp"><button class="button" style="background: #ffe600">返回登录</button></a>
	</div>

</body>
</html>