  const fs = require('fs')
  let _inventoryOrang = JSON.parse(fs.readFileSync('./database/user/hun_ing.json'))
  let cow_sAwal = global.rpg.cow_swal
  let tige_rAwal = global.rpg.tige_rwal
  let rabbi_tAwa = global.rpg.rabbi_twal
  let duck_sAwal = global.rpg.duck_swal
  let chicken_aAwal = global.rpg.chiken_awal
  const addHhunting = (sender) => {
        const obj = {id: sender, besi: cow_sAwal, gold: tige_rAwal, emerald: rabbi_tAwa, umpan: duck_sAwal, potion: chicken_aAwal}
         _inventoryOrang.push(obj)
        fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
   }
  const cekHUNTInventoryAdaAtauGak = (sender) => {
            let status = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addHBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi += amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangHBesi = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].besi -= amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getHBesi = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].besi
            }
        }     
  const addHEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold += amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangHEmas = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].gold -= amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getHEmas = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].gold
            }
        }     
  const addHEmerald = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald += amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangHEmerald = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].emerald -= amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getHEmerald = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].emerald
            }
        }     
        
  const addHUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan += amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangHUmpan = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].umpan -= amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getHUmpan = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].umpan
            }
        }  
  const addHPotion = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion += amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const kurangHPotion = (sender, amount) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _inventoryOrang[position].potion -= amount
                fs.writeFileSync('./database/user/hun_ing.json', JSON.stringify(_inventoryOrang))
            }
        }
   const getHPotion = (sender) => {
            let position = false
            Object.keys(_inventoryOrang).forEach((i) => {
                if (_inventoryOrang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _inventoryOrang[position].potion
            }
        }       
  module.exports = { cekHUNTInventoryAdaAtauGak, 
                     addHhunting, 
                     addHBesi, 
                     addHEmas, 
                     addHEmerald, 
                     addHUmpan,
                     addHPotion,
                     kurangHBesi, 
                     kurangHEmas, 
                     kurangHEmerald, 
                     kurangHUmpan,
                     kurangHPotion,
                     getHBesi, 
                     getHEmas, 
                     getHEmerald,
                     getHUmpan,
                     getHPotion
                  }