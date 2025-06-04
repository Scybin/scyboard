# scyboard

# ⚠️ Disclaimer
This is an early-stage experimental project. Don’t fully trust the auto-generated files. Be sure to review them carefully before sending anything to a PCB manufacturer. While the author has built working prototypes from this repo, there's no guarantee everything will work perfectly.

The author(s) take no responsibility for any damage, issues, or legal trouble that might result from using this project (see the license). Be sure to follow local laws regarding radio frequencies and DIY electronics.

![pcb_3d_render](https://github.com/user-attachments/assets/72f961f7-71c3-46f7-ac3f-4760dd06cf01)


## 📚 Table of Contents

- [Welcome](#welcome)
- [Features](#features)
- [Project Status](#project-status)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Building the Firmware](#building-the-firmware)
  - [Flashing](#flashing)
- [Hardware](#hardware)
- [Disclaimer](#disclaimer)
- [Repository Structure](#repository-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

# ⌨️ Welcome

Scyboard is a custom mechanical keyboard project designed for hobbyists, tinkerers, and keyboard enthusiasts. It offers a flexible platform for creating a compact, efficient, and fully programmable keyboard using open-source tools.


# ⚙️ Features

- Compact layout optimized for ergonomics
- QMK firmware support (wired)
- ZMK firmware support (wireless)
- USB-C connectivity
- Bluetooth functionality
- Customizable keymaps, layers, and macros
- Layout is declared using [Ergogen](https://docs.ergogen.xyz/)


# 🔧 Project Status
Status: Experimental Prototype
Scyboard is in early development. Not yet tested. There may still be bugs or hardware quirks.


# 🔜 TODO

- Review PCB traces
- Update PCB to support screws & headers
- Design case
- Design plate
- Create firmware


# 📦 Parts List

| Part                    | Quantity | Description                          | Datasheet Link                                                                                                       |
|-------------------------|----------|--------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Microcontroller         |    2     | nice!nano v2.0                       | [Nordic nRF52840](https://nicekeyboards.com/nice-nano)                                                               |
| MCU Socket              |    4     | No-Solder Springs Headers            | [Purchase Link](https://typeractive.xyz/products/no-solder-spring-headers?variant=47196312502503)                    |
| Reset Button            |    2     | Panasonic miniature momentary button | [EVQPUC02K](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/PANASONIC-EVQPUC02K.pdf)                          |
| Power Switch            |    2     | Alps miniature SPDT switch           | [SSSS811101](https://cdn.shopify.com/s/files/1/0618/5674/3655/files/ALPS-SSSS811101.pdf)                             |
| Battery Jack            |    2     | JST PH 2.0mm                         | [JST_PH_S2B-PH-K_1x02_P2.00mm_Horizontal](http://www.jst-mfg.com/product/pdf/eng/ePH.pdf)                            |
| Battery                 |    2     | 3.7V LiPo 110mAh (w/ JST adapter)    | [301230](https://www.ufinebattery.com/images/upload/ufx0509-08-3-7v-75mah-lithium-ion-battery-product-datasheet.pdf) |
| Diode                   |    44    | SMD Diode                            | [SOD-123](https://www.onsemi.com/download/data-sheet/pdf/mmsd301t1-d.pdf)                                            |
| Choc V1/V2 Switches     |    44    | Kailh Choc                           |                                                                                                                      |
| Choc Keycaps            |    44    | 40 x 1u, 4 x 1.5u                    |                                                                                                                      |


# 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.
