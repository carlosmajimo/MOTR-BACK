import * as shell from "shelljs";

shell.cp("-R", "src/Public/js/lib", "dist/Public/js/");
shell.cp("-R", "src/Public/fonts", "dist/Public/");
shell.cp("-R", "src/Public/images", "dist/Public/");
