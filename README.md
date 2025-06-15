# scyboard

![pcb_3d_render](https://github.com/user-attachments/assets/bfab142d-bc1a-432d-a56b-56626b2dfd26)

## 📚 Table of Contents

- [⚠️ Disclaimer](#-disclaimer)
- [⌨️ Welcome](#-welcome)
- [⚙️ Features](#-features)
- [📊 Project Status](#-project-status)
- [🔜 TODO](#-todo)
- [📦 Parts List](#-parts-list)
- [🛠️ Build Guide](#-build-guide)
- [💾 Firmware](#-firmware)
- [🙏 Thanks](#-thanks)
- [📄 License](#-license)

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

Not yet tested!! Scyboard is still in early development, this is an experimental prototype. There may still be bugs or hardware issues.

## 🔜 TODO

- Build & test prototype
- Test PCB
- Test ZMK firmware
- Review & update README to ensure correctness
- Create a build guide once prototyping and testing is complete

## 📦 Parts List

| Part                    | Quantity | Description                          | Datasheet & Purchase Links                                                                                           |
|-------------------------|----------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Microcontroller         |    2     | nice!nano v2.0                       | [Nordic nRF52840](https://nicekeyboards.com/nice-nano)                                                               |
| MCU Socket              |    4     | No-Solder Springs Headers            | [Purchase Link (typeractive)](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503)      |
| Reset Button            |    2     | Panasonic miniature momentary button | [EVQPUC02K](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/PANASONIC-EVQPUC02K.pdf)                          |
| Power Switch            |    2     | Alps miniature SPDT switch           | [SSSS811101](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/ALPS-SSSS811101.pdf)                             |
| Battery Jack            |    2     | JST PH 2.0mm                         | [JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal](http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)                            |
| Battery                 |    2     | 3.7V LiPo 110mAh (w/ JST adapter)    | [301230](https://www.ufinebattery.com/images/upload/ufx0509-08-3-7v-75mah-lithium-ion-battery-product-datasheet.pdf) |
| Diode                   |    44    | SMD Diode                            | [SOD-123](https://www.onsemi.com/download/data-sheet/pdf/mmsd301t1-d.pdf)                                            |
| Hotswap Socket          |    44    | Kailh Choc PCB Socket                | [1350Connector](https://www.kailhswitch.com/Content/upload/pdf/202115927/CPG135001S30-data-sheet.pdf?rnd=943)        |
| Choc V1/V2 Switch       |    44    | Kailh Choc                           |                                                                                                                      |
| Choc Keycap             |    44    | 40 x 1u, 4 x 1.5u                    |                                                                                                                      |
| Bottom Case (optional)  |    1     | 3D printed bottom case               |                                                                                                                      |
| Nut  (optional)         |    12    | Inserts for bottom case              | [Purchase Link](https://www.amazon.com/dp/B07LBQFNQD?th=1)                                                           |
| M2X3 Screw  (optional)  |    12    | Screws for bottom case               | [Purchase Link](https://www.amazon.com/gp/product/B01FTI8TM8/)                                                       |

## 🛠️ Build Guide

TODO

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
- **[nickcoutsos](https://nickcoutsos.github.io/keymap-editor/):** For the ZMK keymap editor browser app.
- Open Source Community: For sharing knowledge, scripts, and inspiration.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.txt) file for details.
