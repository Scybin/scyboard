function switchplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[38,-111.4],[38,-56.5]]).appendPoint([58,-50.9]).appendPoint([76,-40.92]).appendPoint([94,-36.42]).appendPoint([114,-36.42]).appendPoint([132,-40.92]).appendPoint([150,-45.52]).appendPoint([150,-90.92]).appendPoint([170.7706538,-100.108492]).appendPoint([187.3099534,-111.2643904]).appendPoint([169.1921033,-138.1252078]).appendPoint([152.8634597,-126.8359245]).appendPoint([137.6272481,-119.0726869]).appendPoint([120.7961304,-114.962183]).appendPoint([103,-114.72]).appendPoint([100,-114.35]).appendPoint([100,-96.3]).appendPoint([83,-96.3]).appendPoint([83,-111.88]).appendPoint([78,-111.5]).appendPoint([38,-111.4]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function switch_cutout_extrude_1_outline_fn(){
    return new CSG.Path2D([[123.9892604,-111.1590368],[137.3190368,-114.7307396]]).appendPoint([140.8907396,-101.4009632]).appendPoint([127.5609632,-97.8292604]).appendPoint([123.9892604,-111.1590368]).close().innerToCAG()
.union(
    new CSG.Path2D([[106.1,-110.22],[119.9,-110.22]]).appendPoint([119.9,-96.42]).appendPoint([106.1,-96.42]).appendPoint([106.1,-110.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.1,-71.72],[110.9,-71.72]]).appendPoint([110.9,-57.92]).appendPoint([97.1,-57.92]).appendPoint([97.1,-71.72]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.1,-88.72],[110.9,-88.72]]).appendPoint([110.9,-74.92]).appendPoint([97.1,-74.92]).appendPoint([97.1,-88.72]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.1,-76.22],[92.9,-76.22]]).appendPoint([92.9,-62.42]).appendPoint([79.1,-62.42]).appendPoint([79.1,-76.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.1,-93.22],[92.9,-93.22]]).appendPoint([92.9,-79.42]).appendPoint([79.1,-79.42]).appendPoint([79.1,-93.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[97.1,-54.72],[110.9,-54.72]]).appendPoint([110.9,-40.92]).appendPoint([97.1,-40.92]).appendPoint([97.1,-54.72]).close().innerToCAG()
).union(
    new CSG.Path2D([[79.1,-59.22],[92.9,-59.22]]).appendPoint([92.9,-45.42]).appendPoint([79.1,-45.42]).appendPoint([79.1,-59.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.1,-71.1],[74.9,-71.1]]).appendPoint([74.9,-57.3]).appendPoint([61.1,-57.3]).appendPoint([61.1,-71.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.1,-88.1],[74.9,-88.1]]).appendPoint([74.9,-74.3]).appendPoint([61.1,-74.3]).appendPoint([61.1,-88.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[61.1,-105.1],[74.9,-105.1]]).appendPoint([74.9,-91.3]).appendPoint([61.1,-91.3]).appendPoint([61.1,-105.1]).close().innerToCAG()
).union(
    new CSG.Path2D([[43.1,-72.9],[56.9,-72.9]]).appendPoint([56.9,-59.1]).appendPoint([43.1,-59.1]).appendPoint([43.1,-72.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[43.1,-89.9],[56.9,-89.9]]).appendPoint([56.9,-76.1]).appendPoint([43.1,-76.1]).appendPoint([43.1,-89.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[43.1,-106.9],[56.9,-106.9]]).appendPoint([56.9,-93.1]).appendPoint([43.1,-93.1]).appendPoint([43.1,-106.9]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.1,-78.92],[146.9,-78.92]]).appendPoint([146.9,-65.12]).appendPoint([133.1,-65.12]).appendPoint([133.1,-78.92]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.1,-95.92],[146.9,-95.92]]).appendPoint([146.9,-82.12]).appendPoint([133.1,-82.12]).appendPoint([133.1,-95.92]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.1,-76.22],[128.9,-76.22]]).appendPoint([128.9,-62.42]).appendPoint([115.1,-62.42]).appendPoint([115.1,-76.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.1,-93.22],[128.9,-93.22]]).appendPoint([128.9,-79.42]).appendPoint([115.1,-79.42]).appendPoint([115.1,-93.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[133.1,-61.92],[146.9,-61.92]]).appendPoint([146.9,-48.12]).appendPoint([133.1,-48.12]).appendPoint([133.1,-61.92]).close().innerToCAG()
).union(
    new CSG.Path2D([[115.1,-59.22],[128.9,-59.22]]).appendPoint([128.9,-45.42]).appendPoint([115.1,-45.42]).appendPoint([115.1,-59.22]).close().innerToCAG()
).union(
    new CSG.Path2D([[166.9380718,-108.7412097],[159.2212097,-120.1819282]]).appendPoint([170.6619282,-127.8987903]).appendPoint([178.3787903,-116.4580718]).appendPoint([166.9380718,-108.7412097]).close().innerToCAG()
).union(
    new CSG.Path2D([[149.5845894,-99.2395205],[143.3195205,-111.5354106]]).appendPoint([155.6154106,-117.8004795]).appendPoint([161.8804795,-105.5045894]).appendPoint([149.5845894,-99.2395205]).close().innerToCAG()
).extrude({ offset: [0, 0, 1] });
}


function plate_hole_extrude_1_outline_fn(){
    return CAG.circle({"center":[108.5,-92.57],"radius":1.1})
.union(
    CAG.circle({"center":[152.25,-90.33],"radius":1.1})
).union(
    CAG.circle({"center":[115.63,-41.18],"radius":1.1})
).union(
    CAG.circle({"center":[92.37,-41.18],"radius":1.1})
).union(
    CAG.circle({"center":[79.8,-108.25],"radius":1.1})
).union(
    CAG.circle({"center":[57.75,-55],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
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
            
            

                function _switch_holes_case_fn() {
                    

                // creating part 0 of case _switch_holes
                let _switch_holes__part_0 = switch_cutout_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _switch_holes__part_0_bounds = _switch_holes__part_0.getBounds();
                let _switch_holes__part_0_x = _switch_holes__part_0_bounds[0].x + (_switch_holes__part_0_bounds[1].x - _switch_holes__part_0_bounds[0].x) / 2
                let _switch_holes__part_0_y = _switch_holes__part_0_bounds[0].y + (_switch_holes__part_0_bounds[1].y - _switch_holes__part_0_bounds[0].y) / 2
                _switch_holes__part_0 = translate([-_switch_holes__part_0_x, -_switch_holes__part_0_y, 0], _switch_holes__part_0);
                _switch_holes__part_0 = rotate([0,0,0], _switch_holes__part_0);
                _switch_holes__part_0 = translate([_switch_holes__part_0_x, _switch_holes__part_0_y, 0], _switch_holes__part_0);

                _switch_holes__part_0 = translate([0,0,0], _switch_holes__part_0);
                let result = _switch_holes__part_0;
                
            
                    return result;
                }
            
            

                function _plate_holes_case_fn() {
                    

                // creating part 0 of case _plate_holes
                let _plate_holes__part_0 = plate_hole_extrude_1_outline_fn();

                // make sure that rotations are relative
                let _plate_holes__part_0_bounds = _plate_holes__part_0.getBounds();
                let _plate_holes__part_0_x = _plate_holes__part_0_bounds[0].x + (_plate_holes__part_0_bounds[1].x - _plate_holes__part_0_bounds[0].x) / 2
                let _plate_holes__part_0_y = _plate_holes__part_0_bounds[0].y + (_plate_holes__part_0_bounds[1].y - _plate_holes__part_0_bounds[0].y) / 2
                _plate_holes__part_0 = translate([-_plate_holes__part_0_x, -_plate_holes__part_0_y, 0], _plate_holes__part_0);
                _plate_holes__part_0 = rotate([0,0,0], _plate_holes__part_0);
                _plate_holes__part_0 = translate([_plate_holes__part_0_x, _plate_holes__part_0_y, 0], _plate_holes__part_0);

                _plate_holes__part_0 = translate([0,0,0], _plate_holes__part_0);
                let result = _plate_holes__part_0;
                
            
                    return result;
                }
            
            

                function switchplate_case_case_fn() {
                    

                // creating part 0 of case switchplate_case
                let switchplate_case__part_0 = switchplate_case_fn();

                // make sure that rotations are relative
                let switchplate_case__part_0_bounds = switchplate_case__part_0.getBounds();
                let switchplate_case__part_0_x = switchplate_case__part_0_bounds[0].x + (switchplate_case__part_0_bounds[1].x - switchplate_case__part_0_bounds[0].x) / 2
                let switchplate_case__part_0_y = switchplate_case__part_0_bounds[0].y + (switchplate_case__part_0_bounds[1].y - switchplate_case__part_0_bounds[0].y) / 2
                switchplate_case__part_0 = translate([-switchplate_case__part_0_x, -switchplate_case__part_0_y, 0], switchplate_case__part_0);
                switchplate_case__part_0 = rotate([0,0,0], switchplate_case__part_0);
                switchplate_case__part_0 = translate([switchplate_case__part_0_x, switchplate_case__part_0_y, 0], switchplate_case__part_0);

                switchplate_case__part_0 = translate([0,0,0], switchplate_case__part_0);
                let result = switchplate_case__part_0;
                
            

                // creating part 1 of case switchplate_case
                let switchplate_case__part_1 = _switch_holes_case_fn();

                // make sure that rotations are relative
                let switchplate_case__part_1_bounds = switchplate_case__part_1.getBounds();
                let switchplate_case__part_1_x = switchplate_case__part_1_bounds[0].x + (switchplate_case__part_1_bounds[1].x - switchplate_case__part_1_bounds[0].x) / 2
                let switchplate_case__part_1_y = switchplate_case__part_1_bounds[0].y + (switchplate_case__part_1_bounds[1].y - switchplate_case__part_1_bounds[0].y) / 2
                switchplate_case__part_1 = translate([-switchplate_case__part_1_x, -switchplate_case__part_1_y, 0], switchplate_case__part_1);
                switchplate_case__part_1 = rotate([0,0,0], switchplate_case__part_1);
                switchplate_case__part_1 = translate([switchplate_case__part_1_x, switchplate_case__part_1_y, 0], switchplate_case__part_1);

                switchplate_case__part_1 = translate([0,0,0], switchplate_case__part_1);
                result = result.subtract(switchplate_case__part_1);
                
            

                // creating part 2 of case switchplate_case
                let switchplate_case__part_2 = _plate_holes_case_fn();

                // make sure that rotations are relative
                let switchplate_case__part_2_bounds = switchplate_case__part_2.getBounds();
                let switchplate_case__part_2_x = switchplate_case__part_2_bounds[0].x + (switchplate_case__part_2_bounds[1].x - switchplate_case__part_2_bounds[0].x) / 2
                let switchplate_case__part_2_y = switchplate_case__part_2_bounds[0].y + (switchplate_case__part_2_bounds[1].y - switchplate_case__part_2_bounds[0].y) / 2
                switchplate_case__part_2 = translate([-switchplate_case__part_2_x, -switchplate_case__part_2_y, 0], switchplate_case__part_2);
                switchplate_case__part_2 = rotate([0,0,0], switchplate_case__part_2);
                switchplate_case__part_2 = translate([switchplate_case__part_2_x, switchplate_case__part_2_y, 0], switchplate_case__part_2);

                switchplate_case__part_2 = translate([0,0,0], switchplate_case__part_2);
                result = result.subtract(switchplate_case__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return switchplate_case_case_fn();
            }

        