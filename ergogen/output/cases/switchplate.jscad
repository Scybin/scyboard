function switchplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[38,-111.4],[38,-56.5]]).appendPoint([58,-50.9]).appendPoint([76,-40.92]).appendPoint([94,-36.42]).appendPoint([114,-36.42]).appendPoint([132,-40.92]).appendPoint([150,-45.52]).appendPoint([150,-90.92]).appendPoint([170.7706538,-100.108492]).appendPoint([187.3099534,-111.2643904]).appendPoint([169.1921033,-138.1252078]).appendPoint([152.8634597,-126.8359245]).appendPoint([137.6272481,-119.0726869]).appendPoint([120.7961304,-114.962183]).appendPoint([103,-114.72]).appendPoint([100,-114.35]).appendPoint([100,-96.3]).appendPoint([83,-96.3]).appendPoint([83,-111.88]).appendPoint([78,-111.5]).appendPoint([38,-111.4]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function switchplate_case_fn() {
                    

                // creating part 0 of case switchplate
                let switchplate__part_0 = switchplate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let switchplate__part_0_bounds = switchplate__part_0.getBounds();
                let switchplate__part_0_x = switchplate__part_0_bounds[0].x + (switchplate__part_0_bounds[1].x - switchplate__part_0_bounds[0].x) / 2
                let switchplate__part_0_y = switchplate__part_0_bounds[0].y + (switchplate__part_0_bounds[1].y - switchplate__part_0_bounds[0].y) / 2
                switchplate__part_0 = translate([-switchplate__part_0_x, -switchplate__part_0_y, 0], switchplate__part_0);
                switchplate__part_0 = rotate([0,0,0], switchplate__part_0);
                switchplate__part_0 = translate([switchplate__part_0_x, switchplate__part_0_y, 0], switchplate__part_0);

                switchplate__part_0 = translate([0,0,0], switchplate__part_0);
                let result = switchplate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_fn();
            }

        