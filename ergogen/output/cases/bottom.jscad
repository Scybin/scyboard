function pcb_extrude_1_outline_fn(){
    return new CSG.Path2D([[40,-107.5052562],[40,-57.9723328]]).appendArc([41.4058668,-56.0626193],{"radius":2,"clockwise":true,"large":false}).appendPoint([57.8849823,-50.9357833]).appendArc([58.1098921,-50.8506706],{"radius":2,"clockwise":false,"large":false}).appendPoint([75.8381452,-42.8926548]).appendArc([76.172117,-42.7769708],{"radius":2,"clockwise":true,"large":false}).appendPoint([93.7611401,-38.379715]).appendArc([94.2462113,-38.32],{"radius":2,"clockwise":true,"large":false}).appendPoint([113.8563013,-38.32]).appendArc([114.1422229,-38.3405433],{"radius":2,"clockwise":true,"large":false}).appendPoint([131.8942475,-40.9047246]).appendArc([132.1035225,-40.9464557],{"radius":2,"clockwise":true,"large":false}).appendPoint([149.7563175,-45.4577256]).appendArc([150.2515141,-45.52],{"radius":2,"clockwise":false,"large":false}).appendPoint([167.75,-45.52]).appendArc([169.75,-47.52],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.75,-98.5154284]).appendArc([169.750021,-98.5245862],{"radius":2,"clockwise":false,"large":false}).appendPoint([169.7592642,-100.5432182]).appendArc([170.6408574,-102.1921356],{"radius":2,"clockwise":false,"large":false}).appendPoint([183.0701596,-110.5758057]).appendArc([183.609849,-113.3522666],{"radius":2,"clockwise":true,"large":false}).appendPoint([169.7551748,-133.8926657]).appendArc([166.9591769,-134.4190083],{"radius":2,"clockwise":true,"large":false}).appendPoint([153.7910077,-125.3084699]).appendArc([153.5610658,-125.1711854],{"radius":2,"clockwise":false,"large":false}).appendPoint([138.6442822,-117.5707045]).appendArc([138.226988,-117.4138451],{"radius":2,"clockwise":false,"large":false}).appendPoint([121.5129184,-113.1838746]).appendArc([121.0557926,-113.1230287],{"radius":2,"clockwise":false,"large":false}).appendPoint([103.1114133,-112.8218698]).appendArc([102.8894847,-112.8057655],{"radius":2,"clockwise":true,"large":false}).appendPoint([78.1245987,-109.6160483]).appendArc([77.8743723,-109.5996694],{"radius":2,"clockwise":false,"large":false}).appendPoint([41.9947368,-109.5052493]).appendArc([40,-107.5052562],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
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

        