qtab
====

For those moments you just want to jquery-load all the things.


Implementation:

<head>
	  <script type="text/javascript" src="jquery-1.8.3.js"></script>
		<script type="text/javascript" src="qtab.jquery.js"></script>
		<script type="text/javascript">
			$(document).ready(function () {
				$('.qUl').qtab();
			});
		</script>
</head>
<body>
		<ul class="qUl">
			<li>
				<a href="#content1.txt">tab 1</a>
			</li>
			<li>
				<a href="#content2.txt">tab 2</a>
			</li>
		</ul>
	
		<div class="qContent"> 
		</div>
</body>
