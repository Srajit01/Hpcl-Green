<?php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biofuel Yield Predictor</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #121212;
            color: #ffffff;
        }
        h1 {
            text-align: center;
            margin-top: 20px;
            color: #ff5722;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #1e1e1e;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        label {
            font-weight: bold;
            margin-top: 10px;
            display: block;
        }
        select, input[type="range"], button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            font-size: 16px;
        }
        select, input[type="range"] {
            background-color: #2a2a2a;
            color: #ffffff;
        }
        button {
            background-color: #ff5722;
            color: #ffffff;
            cursor: pointer;
        }
        button:hover {
            background-color: #e64a19;
        }
        .result {
            text-align: center;
            margin-top: 20px;
            font-size: 18px;
        }
        .slider-value {
            text-align: center;
            margin-top: -10px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <h1>Biofuel Yield Predictor</h1>
    <div class="container">
        <form action="" method="POST">
            <label for="crop">Select Crop Type</label>
            <select name="crop" required>
                <option value="Wheat">Wheat</option>
                <option value="Rice">Rice</option>
                <option value="Corn">Corn</option>
                <option value="Sugarcane">Sugarcane</option>
            </select>

            <label for="residue">Residue Availability (tons)</label>
            <input type="range" name="residue" min="0" max="100" value="10" oninput="updateValue(this, 'residueValue')" required>
            <div class="slider-value" id="residueValue">10 tons</div>

            <label for="temp">Temperature (°C)</label>
            <input type="range" name="temp" min="0" max="50" value="25" oninput="updateValue(this, 'tempValue')" required>
            <div class="slider-value" id="tempValue">25 °C</div>

            <label for="humidity">Humidity (%)</label>
            <input type="range" name="humidity" min="0" max="100" value="60" oninput="updateValue(this, 'humidityValue')" required>
            <div class="slider-value" id="humidityValue">60 %</div>

            <label for="water">Water Availability (liters)</label>
            <input type="range" name="water" min="0" max="1000" value="500" oninput="updateValue(this, 'waterValue')" required>
            <div class="slider-value" id="waterValue">500 liters</div>

            <button type="submit" name="predict_biofuel_yield">Predict</button>
        </form>

        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['predict_biofuel_yield'])) {
            $crop = $_POST['crop'];
            $residue = $_POST['residue'];
            $temp = $_POST['temp'];
            $humidity = $_POST['humidity'];
            $water = $_POST['water'];

            // Predict biofuel yield
            function predict_biofuel_yield($crop, $residue, $temp, $humidity, $water) {
                $yield_factor = [
                    "Wheat" => 1.2,
                    "Rice" => 1.5,
                    "Corn" => 1.8,
                    "Sugarcane" => 2.0
                ];

                if (!isset($yield_factor[$crop])) {
                    return "Error: Invalid crop selection.";
                }

                $base_yield = $yield_factor[$crop] * $residue;
                $climate_factor = $temp * ($humidity / 100);
                $water_factor = $water / 100;

                return $base_yield * $climate_factor * $water_factor;
            }

            $predicted_yield = predict_biofuel_yield($crop, $residue, $temp, $humidity, $water);

            echo "<div class='result'>";
            echo "<h2>Predicted Biofuel Yield</h2>";
            echo "Crop Type: " . htmlspecialchars($crop) . "<br>";
            echo "Residue Availability: " . htmlspecialchars($residue) . " tons<br>";
            echo "Temperature: " . htmlspecialchars($temp) . " °C<br>";
            echo "Humidity: " . htmlspecialchars($humidity) . " %<br>";
            echo "Water Availability: " . htmlspecialchars($water) . " liters<br>";
            echo "Predicted Biofuel Yield: <strong>" . number_format($predicted_yield, 2) . " liters</strong>";
            echo "</div>";
        }
        ?>
    </div>
    <script>
        function updateValue(slider, elementId) {
            const valueDisplay = document.getElementById(elementId);
            const unit = slider.name === "residue" ? " tons" : slider.name === "temp" ? " °C" : slider.name === "humidity" ? " %" : " liters";
            valueDisplay.textContent = slider.value + unit;
        }
    </script>
</body>
</html>