export const types = {
  'normal':
    {
      'offense':
        {
          'super-effective': new Set(),
          'not-very-effective': new Set(['rock', 'steel']),
          'no-effect': new Set(['ghost'])
        },
      'defense':
        {
          'weak-to': new Set(['fighting']),
          'resists': new Set(),
          'immune-to': new Set(['ghost'])
        }
    },
  'fire':
    {
      'offense':
        {
          'super-effective': new Set(['grass', 'ice', 'bug', 'steel']),
          'not-very-effective': new Set(['fire', 'water', 'rock', 'dragon']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(['water', 'ground', 'rock']),
          'resists': new Set(['fire', 'grass', 'ice', 'bug', 'steel', 'fairy']),
          'immune-to': new Set()
        }
    },
  'water':
    {
      'offense':
        {
          'super-effective': new Set(["fire", "ground", "rock"]),
          'not-very-effective': new Set(["water", "grass", "dragon"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["electric", "grass"]),
          'resists': new Set(["fire", "water", "ice", "steel"]),
          'immune-to': new Set()
        }
    },
  'electric':
    {
      'offense':
        {
          'super-effective': new Set(["water", "flying"]),
          'not-very-effective': new Set(["electric", "grass", "dragon"]),
          'no-effect': new Set(["ground"])
        },
      'defense':
        {
          'weak-to': new Set(["ground"]),
          'resists': new Set(["electric", "flying", "steel"]),
          'immune-to': new Set()
        }
    },
  'grass':
    {
      'offense':
        {
          'super-effective': new Set(["water", "ground", "rock"]),
          'not-very-effective': new Set(["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "ice", "poison", "flying", "bug"]),
          'resists': new Set(["water", "electric", "grass", "ground"]),
          'immune-to': new Set()
        }
    },
  'ice':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "ground", "flying", "dragon"]),
          'not-very-effective': new Set(["fire", "water", "ice", "steel"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "fighting", "rock", "steel"]),
          'resists': new Set(["ice"]),
          'immune-to': new Set()
        }
    },
  'fighting':
    {
      'offense':
        {
          'super-effective': new Set(["normal", "ice", "rock", "dark", "steel"]),
          'not-very-effective': new Set(["poison", "flying", "psychic", "bug", "fairy"]),
          'no-effect': new Set(["ghost"])
        },
      'defense':
        {
          'weak-to': new Set(["flying", "psychic", "fairy"]),
          'resists': new Set(["bug", "rock", "dark"]),
          'immune-to': new Set()
        }
    },
  'poison':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "fairy"]),
          'not-very-effective': new Set(["poison", "ground", "rock", "ghost"]),
          'no-effect': new Set(["steel"])
        },
      'defense':
        {
          'weak-to': new Set(["ground", "psychic"]),
          'resists': new Set(["grass", "fighting", "poison", "bug", "fairy"]),
          'immune-to': new Set()
        }
    },
  'ground':
    {
      'offense':
        {
          'super-effective': new Set(["fire", "electric", "poison", "rock", "steel"]),
          'not-very-effective': new Set(["grass", "bug"]),
          'no-effect': new Set(["flying"])
        },
      'defense':
        {
          'weak-to': new Set(["water", "grass", "ice"]),
          'resists': new Set(["poison", "rock"]),
          'immune-to': new Set(["electric"])
        }
    },
  'flying':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "fighting", "bug"]),
          'not-very-effective': new Set(["electric", "rock", "steel"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["electric", "ice", "rock"]),
          'resists': new Set(["grass", "fighting", "bug"]),
          'immune-to': new Set(["ground"])
        }
    },
  'psychic':
    {
      'offense':
        {
          'super-effective': new Set(["fighting", "poison"]),
          'not-very-effective': new Set(["psychic", "steel"]),
          'no-effect': new Set(["dark"])
        },
      'defense':
        {
          'weak-to': new Set(["bug", "ghost", "dark"]),
          'resists': new Set(["fighting", "psychic"]),
          'immune-to': new Set()
        }
    },
  'bug':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "psychic", "dark"]),
          'not-very-effective': new Set(["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "flying", "rock"]),
          'resists': new Set(["grass", "fighting", "ground"]),
          'immune-to': new Set()
        }
    },
  'rock':
    {
      'offense':
        {
          'super-effective': new Set(["fire", "ice", "flying", "bug"]),
          'not-very-effective': new Set(["fighting", "ground", "steel"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["water", "grass", "fighting", "ground", "steel"]),
          'resists': new Set(["normal", "fire", "poison", "flying"]),
          'immune-to': new Set()
        }
    },
  'ghost':
    {
      'offense':
        {
          'super-effective': new Set(["psychic", "ghost"]),
          'not-very-effective': new Set(["dark"]),
          'no-effect': new Set(["normal"])
        },
      'defense':
        {
          'weak-to': new Set(["ghost", "dark"]),
          'resists': new Set(["poison", "bug"]),
          'immune-to': new Set(["normal", "fighting"])
        }
    },
  'dragon':
    {
      'offense':
        {
          'super-effective': new Set(["dragon"]),
          'not-very-effective': new Set(["steel"]),
          'no-effect': new Set(["fairy"])
        },
      'defense':
        {
          'weak-to': new Set(["ice", "dragon", "fairy"]),
          'resists': new Set(["fire", "water", "electric", "grass"]),
          'immune-to': new Set()
        }
    },
  'dark':
    {
      'offense':
        {
          'super-effective': new Set(["psychic", "ghost"]),
          'not-very-effective': new Set(["fighting", "dark", "fairy"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fighting", "bug", "fairy"]),
          'resists': new Set(["ghost", "dark"]),
          'immune-to': new Set(["psychic"])
        }
    },
  'steel':
    {
      'offense':
        {
          'super-effective': new Set(["ice", "rock", "fairy"]),
          'not-very-effective': new Set(["fire", "water", "electric", "steel"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "fighting", "ground"]),
          'resists': new Set(["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"]),
          'immune-to': new Set(["poison"])
        }
    },
  'fairy':
    {
      'offense':
        {
          'super-effective': new Set(["fighting", "dragon", "dark"]),
          'not-very-effective': new Set(["fire", "poison", "steel"]),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["poison", "steel"]),
          'resists': new Set(["fighting", "bug", "dark"]),
          'immune-to': new Set(["dragon"])
        }
    },
};