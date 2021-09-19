mbrApp.registerPlugin("witsec-jquery", {
	name:"witsec-jquery-1.11.2",
	condition:function() {
		if(mbrApp.theme.name.endsWith("5") && mbrApp.projectSettings["witsec-jquery"] === "1.11.2")
			return true;
	},
	priority: 100,
	files:[{
		src: "jquery-1.11.2.min.js",
		publishOnly: true
	}]
});