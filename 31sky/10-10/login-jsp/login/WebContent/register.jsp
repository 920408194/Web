<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<style type="text/css">
	.input{
		margin:5px auto;
	}
</style>

<head>
	<meta charset="utf-8">
	<title>注册</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

	<script type="text/javascript" src="login.js"></script>


	<div  style="background: #ffffe0;height: 566px;margin-top: 15px;width: 1200px;margin-right: auto;margin-left: auto;">
	<div style="vertical-align: middle;display: inline-block;margin-top: 280px;margin-left: 390px;">
		<div id="registPage1" class="loginPageRight">
			<div class="loginPageRightTitle">注册账号</div>

			<form name="Users" action="List.jsp" method="POST"  onsubmit="return regist();">
				<input name="name" id="tel" class="input" type="tel" placeholder="请输入您的账号" />
				<span class="error" id="demo"></span>
				<input name="pwd" id="yzm" class="input" type="password" placeholder="请输入登录密码" />
				<span id="demo1" class="error"></span>
				<input id="yqm" class="input" type="" placeholder="邀请码/选填"/>
				<div>
				<input id="check" type="checkbox" style="margin-left: 64px;" />同意并遵守
				<a class="forget" onclick="miss()">《服务协议》</a>
				</div>
				<button class="button" style="background: #ff9900;color: #fff" type="submit">注册</button>
			</form>

		</div>

	</div>
	</div>
</body>