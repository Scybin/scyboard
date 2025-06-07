function pcb_extrude_1_outline_fn(){
    return new CSG.Path2D([[38,-109.4049937],[38,-58.0169208]]).appendArc([39.4607402,-56.0909928],{"radius":2,"clockwise":true,"large":false}).appendPoint([57.774374,-50.9631753]).appendArc([58.2049146,-50.7863863],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.7701921,-41.0474157]).appendArc([76.2549213,-40.8562697],{"radius":2,"clockwise":true,"large":false}).appendPoint([93.7611401,-36.479715]).appendArc([94.2462113,-36.42],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.7537887,-36.42]).appendArc([114.2388599,-36.479715],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.992779,-40.9181948]).appendArc([132.0072358,-40.9217518],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.7680434,-45.4638421]).appendArc([151.2386579,-45.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.75,-45.52]).appendArc([169.75,-47.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.75,-98.52]).appendPoint([170.7706538,-100.108492]).appendPoint([185.6518783,-110.1460046]).appendArc([186.1915677,-112.9224655],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.3234305,-136.4479463]).appendArc([167.5279683,-136.9746596],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.9735798,-126.9120592]).appendArc([152.7441737,-126.7751453],{"radius":2,"clockwise":false,"large":false}).appendPoint([137.8346294,-119.1783529]).appendArc([137.401144,-119.0174676],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.0165423,-115.0160121]).appendArc([120.5692617,-114.9590956],{"radius":2,"clockwise":false,"large":false}).appendPoint([103.1146021,-114.7215596]).appendArc([102.8863275,-114.7053589],{"radius":2,"clockwise":true,"large":false}).appendPoint([78.1247299,-111.5160652]).appendArc([77.8742403,-111.4996857],{"radius":2,"clockwise":false,"large":false}).appendPoint([39.995,-111.4049875]).appendArc([38,-109.4049937],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = pcb_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        