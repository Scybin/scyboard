# scyboard

![scyboard](https://github.com/user-attachments/assets/b19730be-ccca-4301-9293-8a47856596a3)
![scyboard_plated](https://github.com/user-attachments/assets/8235a60b-1e90-49bf-8fef-073d759e5e49)

## 📚 Table of Contents

- [⚠️ Disclaimer](#disclaimer)
- [⌨️ Welcome](#welcome)
- [⚙️ Features](#features)
- [📊 Project Status](#project-status)
- [📦 Parts List](#parts-list)
- [🛠️ Build Guide](#build-guide)
- [💾 Firmware](#firmware)
- [🙏 Thanks](#thanks)
- [📄 License](#license)

<a name="disclaimer"></a>
## ⚠️ Disclaimer

This project has reached the fully working prototype stage. All core features have been tested and function as intended. However, as with any DIY hardware project, you should carefully review all files before manufacturing or assembly. The author(s) cannot guarantee flawless operation in every environment or configuration.

The author(s) take no responsibility for any damage, issues, or legal trouble that might result from using this project (see the license). Be sure to follow local laws regarding radio frequencies and DIY electronics.

<a name="welcome"></a>
## ⌨️ Welcome

Scyboard is a custom, open-source mechanical keyboard designed for ergonomic comfort and wireless functionality. Inspired by the Sweep and Corne keyboards, scyboard builds on these layouts and design principles. Every aspect was created using open-source tools, making it easy to modify, build, and share.

<a name="features"></a>
## ⚙️ Features

- Compact layout optimized for ergonomics
- ZMK firmware support
- USB-C connectivity & battery charging
- Bluetooth compatible
- Customizable keymaps, layers, and macros
- Layout is declared using Ergogen
- KiCad traces auto-routed using Freerouting
- Open source

<a name="project-status"></a>
## 📊 Project Status

The prototype has been built successfully. All aspects of the keyboard and firmware behave as expected. I am working on moving the ZMK repository to a module.

<a name="parts-list"></a>
## 📦 Parts List

*I am not sponsored or affiliated with the vendors linked below. This is where I prefer to purchase my products.*

| Part                     | Quantity | Description                          | Purchase Link                                                                                                         | Datasheet                                                                                                                                                         |
|--------------------------|----------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Microcontroller          |    2     | nice!nano v2.0                       | [Nice Keyboarrds nice!nano v2.0](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503)    | [Nordic nRF52840](https://nicekeyboards.com/nice-nano)                                                                                                            | 
| Machine Sockets and Pins |    2     | Controller socketing system          | [Mill-Max Machine Sockets and Pins](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503) | [Mill-Max General Technical Specifications](https://www.mill-max.com/sites/default/files/external/catalog/2017-11/Mill-Max%20Gen%20Info%20and%20Tech%20Specs.pdf) |
| Reset Button             |    2     | Panasonic miniature momentary button | [Panasonic Reset Button](https://typeractive.xyz/products/reset-button)                                               | [EVQPUC02K](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/PANASONIC-EVQPUC02K.pdf)                                                                       |
| Power Switch             |    2     | Alps miniature SPDT switch           | [ALPS Powr Switch](https://typeractive.xyz/products/power-switch)                                                     | [SSSS811101](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/ALPS-SSSS811101.pdf)                                                                          |
| Battery Jack             |    2     | JST PH 2.0mm                         | [JST Battery Jack](https://typeractive.xyz/products/battery-jack)                                                     | [JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal](http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)                                                                         |
| Battery                  |    2     | 3.7V LiPo 110mAh (w/ JST adapter)    | [Liter Bihuade Lithium Battery](https://typeractive.xyz/products/lithium-battery-110mah)                              | [301230](https://www.ufinebattery.com/images/upload/ufx0509-08-3-7v-75mah-lithium-ion-battery-product-datasheet.pdf)                                              |
| Diode                    |    44    | SMD Diode                            | [Semtech SMD Diodes](https://typeractive.xyz/products/smd-diodes)                                                     | [SOD-123](https://www.onsemi.com/download/data-sheet/pdf/mmsd301t1-d.pdf)      									                                                 |
| Hotswap Socket           |    44    | Kailh Choc PCB Socket                | [Kailh Hotswap Sockets](https://typeractive.xyz/products/hotswap-sockets)                                             | [1350Connector](https://www.kailhswitch.com/Content/upload/pdf/202115927/CPG135001S30-data-sheet.pdf?rnd=943)                                                     |
| Choc V1/V2 Switch        |    44    | Kailh Choc                           | [Lowprokb Ambients Silent Choc Switches](https://lowprokb.ca/products/ambients-silent-choc-switches)                  |                                                                                                                                                                   |
| Choc Keycap              |    44    | 40 x 1u, 4 x 1.5u                    | [FK MBK Choc Keycaps](https://typeractive.xyz/products/mbk-keycaps)                                                   |                                                                                                                                                                   |
| Nut  (optional)          |    12    | Inserts for bottom case              | [uxcell Knurled Insert Nuts](https://www.amazon.com/dp/B07LBQFNQD?th=1)                                               |                                                                                                                                                                   |
| M2X3 Screw  (optional)   |    24    | Screws for bottom case               | [CO-RODE Screw Kit](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                    |                                                                                                                                                                   |
| M2X4 Screw  (optional)   |    12    | Screws for bottom case               | [CO-RODE Screw Kit](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                    |                                                                                                                                                                   |
| M2X6 Standoff (optional) |    12    | Standoffs for plate                  | [uxcell M2x6 Standoffs](https://a.co/d/fXHgMmH)                                                                       |                                                                                                                                                                   |
| Bottom Case (optional)   |    2     | 3D printed bottom case               |                                                                                                                       |                                                                                                                                                                   |
| Plate (optional)         |    2     | 3D printed plate                     |                                                                                                                       |                                                                                                                                                                   | 
| Screw Spacers (optional) |    12    | 3D printed spacers                   |                                                                                                                       |                                                                                                                                                                   |

<a name="build-guide"></a>
## 🛠️ Build Guide

For assembling the keyboard hardware, I recommend following the guide for the Corne keyboard, as the assembly process is similar. You can find the guide here: [corne-cherry v2 buildguide](https://github.com/foostan/crkbd/blob/main/docs/corne-cherry/v2/buildguide_en.md)

In addition, here are some specific notes for the scyboard:
- There will be slight differences in the assembly process due to the different components used, but the overall steps will be similar.
- Place the nice!nano V2 microcontroller face down (flat side facing up).
- Solder the MCU jumper pads on the *same* (top) side of the PCB where the MCU wis mounted.
- Solder the JST battery connector jumpper pads on the *opposite* (back) side of the PCB where the MCU is mounted.

You can use the 3D printed bottom case without a plate. This requires M2x4 screws on the top, M2X3 screws on the bottom, knurled insert nuts, and 3D printed screw spacers. To mount the PCB directly to the case, use the 3D printed screw spacers between the screw and PCB. 

![screw_spacer](https://github.com/user-attachments/assets/ef3eff7b-e7f6-42c6-901a-7139196d5e08)
![assembled_case](https://github.com/user-attachments/assets/c5cd95bc-1be1-412f-810b-84f73f5b5ab3)

If you want to add a plate to the build, you can replace the nuts and spacers by using M2x6 standoffs. I included files for a plate if you decide to go this route.

<a name="firmware"></a>
## 💾 Firmware

A ready-to-use ZMK configuration for this keyboard is available at:  
[zmk-config-scyboard](https://github.com/Scybin/zmk-config-scyboard)

- Includes keymaps, macros, and custom behaviors tailored for this board.
- Compatible with the [ZMK Keymap Editor](https://nickcoutsos.github.io/keymap-editor/).
- For firmware details, see the [ZMK Documentation](https://zmk.dev/docs/).

To get started, fork or clone the config and follow the flashing instructions in the ZMK docs.

<a name="thanks"></a>
## 🙏 Thanks

- **[Ergogen](https://docs.ergogen.xyz/):** For keyboard PCB generation and configuration.
- **[Ceoloide](https://github.com/ceoloide/ergogen-footprints):** For providing footprints. An additional thanks for code inspiration.
- **[ZMK Firmware](https://zmk.dev/):** For providing the open-source keyboard architecture support.
- **[KiCad](https://www.kicad.org/):** For PCB viewing and editing.
- **[Freerouting](https://www.freerouting.app/):** For PCB auto-routing in KiCad.
- **[typeractive](https://typeractive.xyz/):** For design and parts inspiration.
- **[Sweep by David Philip Barr](https://github.com/davidphilipbarr/Sweep):** For key matrix and column stagger inspiration.
- **[Corne by foostan](https://github.com/foostan/crkbd):** For thumb cluster inspiration.
- **[FlatFootFox](https://flatfootfox.com/ergogen-introduction/):** For an Ergogen tutorial.
- **[nickcoutsos](https://nickcoutsos.github.io/keymap-editor/):** For the ZMK Keymap Editor browser app.
- Open Source Community: For sharing knowledge, scripts, and inspiration.

<a name="license"></a>
## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.
