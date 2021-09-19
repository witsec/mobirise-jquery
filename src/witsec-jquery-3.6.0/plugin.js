mbrApp.registerPlugin("witsec-jquery", {
	name:"witsec-jquery-3.6.0",
	condition:function() {
		if(mbrApp.theme.name.endsWith("5") && mbrApp.projectSettings["witsec-jquery"] === "3.6.0")
			return true;
	},
	priority: 100,
	files:[{
		src: "jquery-3.6.0.min.js",
		publishOnly: true
	}]
});