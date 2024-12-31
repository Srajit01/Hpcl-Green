const int tempPin = A0;     // Temperature sensor pin
const int pressurePin = A1; // Pressure sensor pin
const int flowPin = A2;     // Flow sensor pin

// Scaling Factors
const float TEMP_SCALE = 100.0;     // Convert voltage to temperature in °C
const float PRESSURE_SCALE = 10.0;  // Convert voltage to pressure in bar
const float FLOW_SCALE = 50.0;      // Convert voltage to flow rate in L/min

void setup() {
  // Initialize serial communication
  Serial.begin(9600);

  // Configure sensor pins as input
  pinMode(tempPin, INPUT);
  pinMode(pressurePin, INPUT);
  pinMode(flowPin, INPUT);

  // Print header for clarity
  Serial.println("Sensor Readings:");
  Serial.println("==============================");
}

void loop() {
  // Read and convert sensor data
  float temperature = analogRead(tempPin) * (5.0 / 1023.0) * TEMP_SCALE; // Temperature in °C
  float pressure = analogRead(pressurePin) * (5.0 / 1023.0) * PRESSURE_SCALE; // Pressure in bar
  float flowRate = analogRead(flowPin) * (5.0 / 1023.0) * FLOW_SCALE; // Flow rate in L/min

  // Display data on Serial Monitor
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print(" °C, Pressure: ");
  Serial.print(pressure);
  Serial.print(" bar, Flow Rate: ");
  Serial.print(flowRate);
  Serial.println(" L/min");

  // Wait for 1 second before updating
  delay(1000);
}