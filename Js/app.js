function Temperature(temperature, type) {
    this.temperature = temperature;
    this.type = type;

    this.setTemperature = function(temperature, type) {
        this.temperature = temperature;
        this.type = type;
    };

    this.convertF = function() {
        if (this.type === "C") {
            return this.temperature * (9 / 5) + 32;
        }
    };

    this.convertK = function() {
        if (this.type === "C") {
            return (this.temperature + 273.15);
        }
    };
}

let converTemperature = function(temperature){
    if (temperature < -273) {
        alert("Error: min = -273");
    }else{
        let temp = new Temperature(parseFloat(temperature), "C");
        document.getElementById("f").value = temp.convertF();
        document.getElementById("k").value = temp.convertK();
    }
};