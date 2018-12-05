<%@ page import="java.io.BufferedReader" %>
<%@page import="java.io.FileReader"%>  
<%@page import="java.io.File"%>  
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

	  <div class="dialog-bg" />
      <div class="dialog">
        <div class="dialog-header">对不起</div>
        <div class="dialog-content">
          <p style="margin-top: 30px;">您可能尚未注册</p>
          <a href="login.jsp"><button class="button" style="background: #ffe600">返回登录</button></a>
        </div>
      </div>
    </div>
	
<%
	String name = request.getParameter("name");
	String pwd = request.getParameter("pwd");

  	String FilePath = "C:/Users/jialiyi/Desktop";
  	File file = new File(FilePath,"Users.txt");
  	FileReader fr = new FileReader(file);  
    BufferedReader br = new BufferedReader(fr);
    String str = br.readLine();
    
    while(str!=null){
    	if(name.equals(str)){
        	str = br.readLine();
        	if(pwd.equals(str)){
        		%>
        			<script type="text/javascript">  
				    window.location="page.html";  
				    </script> 
        		<% 
        	}else{
        		%>
        			<script type="text/javascript">  
				    window.location="Error.html";  
				    </script> 
        		<% 
        	}
        } else{
        	str = br.readLine();
        	str = br.readLine();
        }
    }
%>

</body>
</html>