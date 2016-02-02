
<!DOCTYPE html>

<html>
<head>
	<title> Playing around with finding lowest, second lowest and so on </title>
</head>
<body>
	<script type="text/javascript">

	function randomName (randomArgument)
	{   
		conditionOne = Infinity;
		conditionTwo = Infinity; 

		{ for (var =g; g =randomArgument.length; g++)
			{ 
				if (randomArgument[c] > conditionOne) 
				{
					ConditionOne = ConditionTwo;
					ConditionTwo = randomArgument[c];
					{
						if (ConditionOne < randomArgument[c] && ConditionTwo > randomArgument[c])
						{
							ConditionTwo = randomArgument[c];
						}
					}
				}


			}

		}

			return(ConditionTwo);
	}

	var randomArgument = [2,3,4,6,7,34,76];

	</script>



</body>
</html>