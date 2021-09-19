defineM("witsec-jquery", function(g, mbrApp, TR) {
    mbrApp.regExtension({
        name: "witsec-jquery",
        events: {
            load: function() {
				// Don't do anything if this is not an M5 theme
				if (!mbrApp.theme.name.endsWith("5"))
					return false;

                var a = this;

				// Add site settings
				a.addFilter("sidebarProjectSettings",function(b){
					var jq = a.projectSettings["witsec-jquery"] || "";

					var c = {
						title:"witsec",
						name:"witsec-site-settings",
						html:[
							'<div class="form-group col-md-12">',
							'<style>',
							'#witsec-jquery, #witsec-jquery option { background:#fff; color:#000; padding:0px; margin:0xp }',
							'</style>',
							'<label class="control-label">Add jQuery</label>',
							'  <select id="witsec-jquery" name="witsec-jquery" class="form-control">',
							'    <option value="">Off</option>',
							'    <option value="1.11.2">1.11.2 (used in M4 themes in Mobirise v4)</option>',
							'    <option value="3.5.1">3.5.1 (used in M4 themes in Mobirise v5)</option>',
							'    <option value="3.6.0">3.6.0</option>',
							'  </select>',
							'  <script>',
							'  $("#witsec-jquery").val("' + jq + '");',
							'  </script>',
							'</div>',
						].join("\n")
					};
					b.push(c);

					return b;
				});

				// Save setting
				a.$body.on("change", "#witsec-jquery", function() {
                    a.projectSettings["witsec-jquery"] = a.$body.find("#witsec-jquery option:selected").val();
                });
            }
        }
    })
}, ["jQuery", "mbrApp", "TR()"]);