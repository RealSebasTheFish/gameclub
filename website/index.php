<?php include 'php/requests.php' ?>

<html lang="en">
	<head>
		<link rel="stylesheet" href="css/main.css"/>
		<title>Game Club Landing Page</title>
		<script src="https://gameclub.sacredheart.tech/js/scripts/functions.js"></script>
		<script>
			//BIG RED BUTTON WITH A NUKE ON IT

			importData();

			var allGames = [];
			
			function expand(element) {
				var child = element.childNodes;
				for (var i = 0; i < child.length; i++) {
					if (child[i].nodeName == "DIV") {
						if (child[i].classList.contains("hidden")) {
							if (child[i].style.display == "") {
								child[i].style.display = "inline";
							}
							else if (child[i].style.display == "inline") {
								child[i].style.display = "";
							}
						}
					}
				}
			}

			function testInsert()
			{
				var testMember = new member("JoeTheGamer", 4273859384728);

				<?php
					$phpMember = "<script>document.write(results)</script>";
					$sql = "SELECT * FROM `emails`";
					$result = $conn->query($sql);
						
					if ($result->num_rows > 0) {
						// output data of each row
						while($row = $result->fetch_assoc()) {
							$rer = $row["email"] . ",";
							echo $rer;
						}
						} else {
							echo "No emails";
						}
					}
					$members = "please work";
				?>
				var memberData = "<?php echo $members ?>";
				console.log(memberData);
			}
		</script>
	</head>
	
	<body>
		<h1>Test Page</h1>
		
		<div class="game" onclick="expand(this)">
			<h2>Smash Bros - 1st</h2>
			<div class="hidden">
				<h3>Players</h3>
				<ol>
					<li>Nathan</li>
					<li>Seb</li>
					<li>Nico</li>
				</ol>
				<h3>Stats</h3>
				<table border="1">
					<tr>
						<th>Name</th>
						<th>Kills</th>
						<th>Deaths</th>
						<th>Points</th>
					</tr>
					<tr>
						<td>Seb</td>
						<td>3</td>
						<td>4</td>
						<td>8</td>
					</tr>
					<tr>
						<td>Nico</td>
						<td>4</td>
						<td>3</td>
						<td>6</td>
					</tr>
					<tr>
						<td>Nathan</td>
						<td>7</td>
						<td>5</td>
						<td>9</td>
					</tr>
				</table>
			</div>
		</div>
		<button onclick="testInsert();">Click Me!</button>
	<body>

</html>