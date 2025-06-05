function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[37,-110.5315651],[37,-54.8824024]]).appendArc([38.2931988,-53.0114582],{"radius":2,"clockwise":true,"large":false}).appendPoint([54.9963688,-46.7013718]).appendArc([55.0036294,-46.6986128],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.8876722,-39.8629342]).appendArc([73.1166628,-39.7908343],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.7611401,-35.379715]).appendArc([91.2462113,-35.32],{"radius":2,"clockwise":true,"large":false}).appendPoint([116.8892294,-35.32]).appendArc([117.1100924,-35.3322325],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.830056,-37.3011173]).appendArc([135.1642724,-37.3674565],{"radius":2,"clockwise":true,"large":false}).appendPoint([152.7280213,-42.4414284]).appendArc([153.2831007,-42.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([170.75,-42.52]).appendArc([172.75,-44.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.75,-67.360621]).appendArc([172.7247587,-67.6773672],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.727932,-98.8301521]).appendArc([168.5843049,-100.8049735],{"radius":2,"clockwise":false,"large":false}).appendPoint([185.5572724,-112.2533844]).appendArc([186.0969618,-115.0298453],{"radius":2,"clockwise":true,"large":false}).appendPoint([172.2623675,-135.5404746]).appendArc([169.4376264,-136.0465551],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.2097208,-126.5464828]).appendArc([155.9510359,-126.3889359],{"radius":2,"clockwise":false,"large":false}).appendPoint([136.4191938,-116.4369653]).appendArc([135.6122358,-116.2215313],{"radius":2,"clockwise":false,"large":false}).appendPoint([117.9814945,-115.3298382]).appendArc([117.8252953,-115.3280464],{"radius":2,"clockwise":false,"large":false}).appendPoint([100.1649319,-115.8154481]).appendArc([99.8365515,-115.7974613],{"radius":2,"clockwise":true,"large":false}).appendPoint([81.1201338,-113.2165658]).appendArc([80.8787438,-113.1980709],{"radius":2,"clockwise":false,"large":false}).appendPoint([38.9681858,-112.531312]).appendArc([37,-110.5315651],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        