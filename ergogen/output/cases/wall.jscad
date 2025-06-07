function xlBoard_extrude_4_outline_fn(){
    return new CSG.Path2D([[37,-110.535757],[37,-54.8824024]]).appendArc([38.2931988,-53.0114582],{"radius":2,"clockwise":true,"large":false}).appendPoint([54.9963688,-46.7013718]).appendArc([55.0036294,-46.6986128],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.8876722,-39.8629342]).appendArc([73.1166628,-39.7908343],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.7611401,-35.379715]).appendArc([91.2462113,-35.32],{"radius":2,"clockwise":true,"large":false}).appendPoint([116.8892294,-35.32]).appendArc([117.1100924,-35.3322325],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.830056,-37.3011173]).appendArc([135.1642724,-37.3674565],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.7280213,-42.4414284]).appendArc([153.2831007,-42.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.75,-42.52]).appendArc([172.75,-44.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.75,-99.2114193]).appendArc([173.625362,-100.8652601],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.0775599,-110.0129689]).appendArc([187.6109971,-112.7851955],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.7544379,-137.7760724]).appendArc([167.9270345,-138.2802376],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.9851385,-128.9533664]).appendArc([154.7237913,-128.7939044],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.0665381,-118.7780335]).appendArc([134.5333609,-118.5954799],{"radius":2,"clockwise":false,"large":false}).appendPoint([119.3542996,-115.699589]).appendArc([118.9604564,-115.6642462],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.7070683,-115.8189807]).appendArc([102.4934341,-115.809582],{"radius":2,"clockwise":true,"large":false}).appendPoint([75.8790774,-113.2077307]).appendArc([75.7205592,-113.1985668],{"radius":2,"clockwise":false,"large":false}).appendPoint([38.9639234,-112.5354316]).appendArc([37,-110.535757],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}


function pcb_extrude_4_outline_fn(){
    return new CSG.Path2D([[38,-109.4049937],[38,-58.0169208]]).appendArc([39.4607402,-56.0909928],{"radius":2,"clockwise":true,"large":false}).appendPoint([57.774374,-50.9631753]).appendArc([58.2049146,-50.7863863],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.7701921,-41.0474157]).appendArc([76.2549213,-40.8562697],{"radius":2,"clockwise":true,"large":false}).appendPoint([93.7611401,-36.479715]).appendArc([94.2462113,-36.42],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.7537887,-36.42]).appendArc([114.2388599,-36.479715],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.992779,-40.9181948]).appendArc([132.0072358,-40.9217518],{"radius":2,"clockwise":false,"large":false}).appendPoint([150.7680434,-45.4638421]).appendArc([151.2386579,-45.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.75,-45.52]).appendArc([169.75,-47.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.75,-98.52]).appendPoint([170.7706538,-100.108492]).appendPoint([185.6518783,-110.1460046]).appendArc([186.1915677,-112.9224655],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.3234305,-136.4479463]).appendArc([167.5279683,-136.9746596],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.9735798,-126.9120592]).appendArc([152.7441737,-126.7751453],{"radius":2,"clockwise":false,"large":false}).appendPoint([137.8346294,-119.1783529]).appendArc([137.401144,-119.0174676],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.0165423,-115.0160121]).appendArc([120.5692617,-114.9590956],{"radius":2,"clockwise":false,"large":false}).appendPoint([103.1146021,-114.7215596]).appendArc([102.8863275,-114.7053589],{"radius":2,"clockwise":true,"large":false}).appendPoint([78.1247299,-111.5160652]).appendArc([77.8742403,-111.4996857],{"radius":2,"clockwise":false,"large":false}).appendPoint([39.995,-111.4049875]).appendArc([38,-109.4049937],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 4] });
}




                function _outerWall_case_fn() {
                    

                // creating part 0 of case _outerWall
                let _outerWall__part_0 = xlBoard_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _outerWall__part_0_bounds = _outerWall__part_0.getBounds();
                let _outerWall__part_0_x = _outerWall__part_0_bounds[0].x + (_outerWall__part_0_bounds[1].x - _outerWall__part_0_bounds[0].x) / 2
                let _outerWall__part_0_y = _outerWall__part_0_bounds[0].y + (_outerWall__part_0_bounds[1].y - _outerWall__part_0_bounds[0].y) / 2
                _outerWall__part_0 = translate([-_outerWall__part_0_x, -_outerWall__part_0_y, 0], _outerWall__part_0);
                _outerWall__part_0 = rotate([0,0,0], _outerWall__part_0);
                _outerWall__part_0 = translate([_outerWall__part_0_x, _outerWall__part_0_y, 0], _outerWall__part_0);

                _outerWall__part_0 = translate([0,0,0], _outerWall__part_0);
                let result = _outerWall__part_0;
                
            
                    return result;
                }
            
            

                function _innerWall_case_fn() {
                    

                // creating part 0 of case _innerWall
                let _innerWall__part_0 = pcb_extrude_4_outline_fn();

                // make sure that rotations are relative
                let _innerWall__part_0_bounds = _innerWall__part_0.getBounds();
                let _innerWall__part_0_x = _innerWall__part_0_bounds[0].x + (_innerWall__part_0_bounds[1].x - _innerWall__part_0_bounds[0].x) / 2
                let _innerWall__part_0_y = _innerWall__part_0_bounds[0].y + (_innerWall__part_0_bounds[1].y - _innerWall__part_0_bounds[0].y) / 2
                _innerWall__part_0 = translate([-_innerWall__part_0_x, -_innerWall__part_0_y, 0], _innerWall__part_0);
                _innerWall__part_0 = rotate([0,0,0], _innerWall__part_0);
                _innerWall__part_0 = translate([_innerWall__part_0_x, _innerWall__part_0_y, 0], _innerWall__part_0);

                _innerWall__part_0 = translate([0,0,0], _innerWall__part_0);
                let result = _innerWall__part_0;
                
            
                    return result;
                }
            
            

                function wall_case_fn() {
                    

                // creating part 0 of case wall
                let wall__part_0 = _outerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_0_bounds = wall__part_0.getBounds();
                let wall__part_0_x = wall__part_0_bounds[0].x + (wall__part_0_bounds[1].x - wall__part_0_bounds[0].x) / 2
                let wall__part_0_y = wall__part_0_bounds[0].y + (wall__part_0_bounds[1].y - wall__part_0_bounds[0].y) / 2
                wall__part_0 = translate([-wall__part_0_x, -wall__part_0_y, 0], wall__part_0);
                wall__part_0 = rotate([0,0,0], wall__part_0);
                wall__part_0 = translate([wall__part_0_x, wall__part_0_y, 0], wall__part_0);

                wall__part_0 = translate([0,0,0], wall__part_0);
                let result = wall__part_0;
                
            

                // creating part 1 of case wall
                let wall__part_1 = _innerWall_case_fn();

                // make sure that rotations are relative
                let wall__part_1_bounds = wall__part_1.getBounds();
                let wall__part_1_x = wall__part_1_bounds[0].x + (wall__part_1_bounds[1].x - wall__part_1_bounds[0].x) / 2
                let wall__part_1_y = wall__part_1_bounds[0].y + (wall__part_1_bounds[1].y - wall__part_1_bounds[0].y) / 2
                wall__part_1 = translate([-wall__part_1_x, -wall__part_1_y, 0], wall__part_1);
                wall__part_1 = rotate([0,0,0], wall__part_1);
                wall__part_1 = translate([wall__part_1_x, wall__part_1_y, 0], wall__part_1);

                wall__part_1 = translate([0,0,0], wall__part_1);
                result = result.subtract(wall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return wall_case_fn();
            }

        