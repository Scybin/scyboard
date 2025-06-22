# scyboard

![scyboard](https://github.com/user-attachments/assets/536cc8c7-8e2a-4709-b515-9bdd71e46f08)

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

## ⚠️ Disclaimer

This is an early-stage experimental project. Don’t fully trust the auto-generated files. Be sure to review them carefully before sending anything to a PCB manufacturer. While the author has built working prototypes from this repo, there's no guarantee everything will work perfectly.

The author(s) take no responsibility for any damage, issues, or legal trouble that might result from using this project (see the license). Be sure to follow local laws regarding radio frequencies and DIY electronics.

## ⌨️ Welcome

Scyboard is a custom, open-source mechanical keyboard designed for ergonomic comfort and wireless functionality. Inspired by the Sweep and Corne keyboards, scyboard builds on these layouts and design principles. Every aspect was created using open-source tools, making it easy to modify, build, and share.

## ⚙️ Features

- Compact layout optimized for ergonomics
- ZMK firmware support
- USB-C connectivity & battery charging
- Bluetooth compatible
- Customizable keymaps, layers, and macros
- Layout is declared using Ergogen
- KiCad traces auto-routed using Freerouting
- Open source

## 📊 Project Status

The prototype has been built successfully. All aspects of the keyboard and firmware behave as expected. I am working on creating a 3D case for the board.

## 📦 Parts List

*I am not sponsored or affiliated with the vendors linked below. This is where I prefer to purchase my products.*

| Part                     | Quantity | Description                          | Purchase Link                                                                                                         | Datasheet                                                                                                            |
|--------------------------|----------|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Microcontroller          |    2     | nice!nano v2.0                       | [Nice Keyboarrds nice!nano v2.0](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503)    | [Nordic nRF52840](https://nicekeyboards.com/nice-nano)                                                               | 
| Machine Sockets and Pins |    2     | Controller socketing system          | [Mill-Max Machine Sockets and Pins](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503) |                                                                                                                      |
| Reset Button             |    2     | Panasonic miniature momentary button | [Panasonic Reset Button](https://typeractive.xyz/products/reset-button)                                               | [EVQPUC02K](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/PANASONIC-EVQPUC02K.pdf)                          |
| Power Switch             |    2     | Alps miniature SPDT switch           | [ALPS Powr Switch](https://typeractive.xyz/products/power-switch)                                                     | [SSSS811101](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/ALPS-SSSS811101.pdf)                             |
| Battery Jack             |    2     | JST PH 2.0mm                         | [JST Battery Jack](https://typeractive.xyz/products/battery-jack)                                                     | [JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal](http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)                            |
| Battery                  |    2     | 3.7V LiPo 110mAh (w/ JST adapter)    | [Liter Bihuade Lithium Battery](https://typeractive.xyz/products/lithium-battery-110mah)                              | [301230](https://www.ufinebattery.com/images/upload/ufx0509-08-3-7v-75mah-lithium-ion-battery-product-datasheet.pdf) |
| Diode                    |    44    | SMD Diode                            | [Semtech SMD Diodes](https://typeractive.xyz/products/smd-diodes)                                                     | [SOD-123](https://www.onsemi.com/download/data-sheet/pdf/mmsd301t1-d.pdf)      									    |
| Hotswap Socket           |    44    | Kailh Choc PCB Socket                | [Kailh Hotswap Sockets](https://typeractive.xyz/products/hotswap-sockets)                                             | [1350Connector](https://www.kailhswitch.com/Content/upload/pdf/202115927/CPG135001S30-data-sheet.pdf?rnd=943)        |
| Choc V1/V2 Switch        |    44    | Kailh Choc                           | [Lowprokb Ambients Silent Choc Switches](https://lowprokb.ca/products/ambients-silent-choc-switches)                  |                                                                                                                      |
| Choc Keycap              |    44    | 40 x 1u, 4 x 1.5u                    | [FK MBK Choc Keycaps](https://typeractive.xyz/products/mbk-keycaps)                                                   |                                                                                                                      |
| Bottom Case (optional)   |    1     | 3D printed bottom case               |                                                                                                                       |                                                                                                                      |
| Nut  (optional)          |    12    | Inserts for bottom case              | [uxcell Knurled Insert Nuts](https://www.amazon.com/dp/B07LBQFNQD?th=1)                                               |                                                                                                                      |
| M2X3 Screw  (optional)   |    12    | Screws for bottom case               | [CO-RODE Screw Kit](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                    |                                                                                                                      |

## 🛠️ Build Guide

For assembling the keyboard hardware, I recommend following the guide for the Corne keyboard, as the assembly process is similar. You can find the guide here: [corne-cherry v2 buildguide](https://github.com/foostan/crkbd/blob/main/docs/corne-cherry/v2/buildguide_en.md)

In addition, here are some specific notes for the scyboard:
- There will be slight differences in the assembly process due to the different components used, but the overall steps will be similar.
- Solder the MCU jumper pads on the *opposite* side of the PCB where the MCU wis mounted.
- Solder the JST battery connector jumpper pads on the *same* side of the PCB where the MCU is mounted.

## 💾 Firmware

A ready-to-use ZMK configuration for this hardware is available at:  
[zmk-config-scyboard](https://github.com/Scybin/zmk-config-scyboard)

- Includes keymaps, macros, and custom behaviors tailored for this board.
- Compatible with the [ZMK Keymap Editor](https://nickcoutsos.github.io/keymap-editor/).
- For firmware details, see the [ZMK Documentation](https://zmk.dev/docs/).

To get started, fork or clone the config and follow the flashing instructions in the ZMK docs.

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

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.
