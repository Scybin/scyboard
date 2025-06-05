function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[37,-110.535757],[37,-54.8824024]]).appendArc([38.2931988,-53.0114582],{"radius":2,"clockwise":true,"large":false}).appendPoint([54.9963688,-46.7013718]).appendArc([55.0036294,-46.6986128],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.8876722,-39.8629342]).appendArc([73.1166628,-39.7908343],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.7611401,-35.379715]).appendArc([91.2462113,-35.32],{"radius":2,"clockwise":true,"large":false}).appendPoint([116.8892294,-35.32]).appendArc([117.1100924,-35.3322325],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.830056,-37.3011173]).appendArc([135.1642724,-37.3674565],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.7280213,-42.4414284]).appendArc([153.2831007,-42.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.75,-42.52]).appendArc([172.75,-44.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.75,-99.2114193]).appendArc([173.625362,-100.8652601],{"radius":2,"clockwise":false,"large":false}).appendPoint([187.0775599,-110.0129689]).appendArc([187.6109971,-112.7851955],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.7544379,-137.7760724]).appendArc([167.9270345,-138.2802376],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.9851385,-128.9533664]).appendArc([154.7237913,-128.7939044],{"radius":2,"clockwise":false,"large":false}).appendPoint([135.0665381,-118.7780335]).appendArc([134.5333609,-118.5954799],{"radius":2,"clockwise":false,"large":false}).appendPoint([119.3542996,-115.699589]).appendArc([118.9604564,-115.6642462],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.7070683,-115.8189807]).appendArc([102.4934341,-115.809582],{"radius":2,"clockwise":true,"large":false}).appendPoint([75.8790774,-113.2077307]).appendArc([75.7205592,-113.1985668],{"radius":2,"clockwise":false,"large":false}).appendPoint([38.9639234,-112.5354316]).appendArc([37,-110.535757],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function xlBottom_case_fn() {
                    

                // creating part 0 of case xlBottom
                let xlBottom__part_0 = xlBoard_extrude_1_outline_fn();

                // make sure that rotations are relative
                let xlBottom__part_0_bounds = xlBottom__part_0.getBounds();
                let xlBottom__part_0_x = xlBottom__part_0_bounds[0].x + (xlBottom__part_0_bounds[1].x - xlBottom__part_0_bounds[0].x) / 2
                let xlBottom__part_0_y = xlBottom__part_0_bounds[0].y + (xlBottom__part_0_bounds[1].y - xlBottom__part_0_bounds[0].y) / 2
                xlBottom__part_0 = translate([-xlBottom__part_0_x, -xlBottom__part_0_y, 0], xlBottom__part_0);
                xlBottom__part_0 = rotate([0,0,0], xlBottom__part_0);
                xlBottom__part_0 = translate([xlBottom__part_0_x, xlBottom__part_0_y, 0], xlBottom__part_0);

                xlBottom__part_0 = translate([0,0,0], xlBottom__part_0);
                let result = xlBottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return xlBottom_case_fn();
            }

        