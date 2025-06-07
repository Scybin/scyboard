function xlBoard_extrude_1_outline_fn(){
    return new CSG.Path2D([[34.4,-113.0315651],[34.4,-54.9459531]]).appendArc([35.7730788,-53.0467507],{"radius":2,"clockwise":true,"large":false}).appendPoint([54.8462491,-46.7507527]).appendArc([55.1435843,-46.6251765],{"radius":2,"clockwise":false,"large":false}).appendPoint([72.7902615,-37.4292971]).appendArc([73.2294467,-37.2626383],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.7611401,-32.879715]).appendArc([91.2462113,-32.82],{"radius":2,"clockwise":true,"large":false}).appendPoint([116.7537887,-32.82]).appendArc([117.2388599,-32.879715],{"radius":2,"clockwise":true,"large":false}).appendPoint([134.98234,-37.315585]).appendArc([135.0175746,-37.3247351],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.0444045,-42.4511349]).appendArc([154.5647103,-42.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([172.15,-42.52]).appendArc([174.15,-44.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([174.15,-96.6613001]).appendArc([175.0902676,-98.3574626],{"radius":2,"clockwise":false,"large":false}).appendPoint([191.1102385,-108.3664583]).appendArc([191.7085812,-111.1810065],{"radius":2,"clockwise":true,"large":false}).appendPoint([170.7559615,-142.2445426]).appendArc([167.9314536,-142.7507904],{"radius":2,"clockwise":true,"large":false}).appendPoint([153.3040774,-132.2488228]).appendArc([153.0456256,-132.0914434],{"radius":2,"clockwise":false,"large":false}).appendPoint([133.3233102,-122.0424217]).appendArc([132.9268776,-121.8909617],{"radius":2,"clockwise":false,"large":false}).appendPoint([118.7785504,-118.1476692]).appendArc([118.236484,-118.0813752],{"radius":2,"clockwise":false,"large":false}).appendPoint([102.7232454,-118.3181192]).appendArc([102.4774564,-118.3067329],{"radius":2,"clockwise":true,"large":false}).appendPoint([78.491467,-115.7099026]).appendArc([78.3080102,-115.6985365],{"radius":2,"clockwise":false,"large":false}).appendPoint([36.3681858,-115.031312]).appendArc([34.4,-113.0315651],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        