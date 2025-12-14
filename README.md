<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number System Converter</title>
    <link href="style1.css" rel="stylesheet">
</head>
<body>
    <div class="converter">
        <h1>Number System Converter</h1>
        <label for="inputNumber">Enter Number:</label>
        <input type="text" id="inputNumber" placeholder="Enter value">

        <label for="fromBase">From:</label>
        <select id="fromBase">
            <option value="2">Binary</option>
            <option value="10">Decimal</option>
            <option value="8">Octal</option>
            <option value="16">Hexadecimal</option>
        </select>

        <label for="toBase">To:</label>
        <select id="toBase">
            <option value="2">Binary</option>
            <option value="10">Decimal</option>
            <option value="8">Octal</option>
            <option value="16">Hexadecimal</option>
        </select>

        <button onclick="convertNumber()">Convert</button>

        <div class="result" id="result">Result will appear here:</div>
    </div>

    <script src="script.js"></script>
</body>
</html>
