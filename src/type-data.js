export const types = {
  'normal':
    {
      'offense':
        {
          'super-effective': new Set(),
          'not-very-effective': new Set(['rock', 'steel']),
          'neutral': new Set(['water', 'dragon', 'grass', 'psychic', 'electric', 'fire', 'ground', 'fairy', 'ice', 'bug', 'poison', 'flying', 'dark', 'fighting', 'normal']),
          'no-effect': new Set(['ghost'])
        },
      'defense':
        {
          'weak-to': new Set(['fighting']),
          'resists': new Set(),
          'neutral': new Set(['bug', 'grass', 'ice', 'fire', 'flying', 'steel', 'rock', 'fairy', 'poison', 'water', 'psychic', 'ground', 'dark', 'electric', 'dragon', 'normal']),
          'immune-to': new Set(['ghost'])
        }
    },
  'fire':
    {
      'offense':
        {
          'super-effective': new Set(['grass', 'ice', 'bug', 'steel']),
          'not-very-effective': new Set(['fire', 'water', 'rock', 'dragon']),
          'neutral': new Set(['psychic', 'electric', 'dark', 'ground', 'ghost', 'flying', 'poison', 'fairy', 'normal', 'fighting']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(['water', 'ground', 'rock']),
          'resists': new Set(['fire', 'grass', 'ice', 'bug', 'steel', 'fairy']),
          'neutral': new Set(['ghost', 'electric', 'normal', 'fighting', 'flying', 'psychic', 'dragon', 'poison', 'dark']),
          'immune-to': new Set()
        }
    },
  'water':
    {
      'offense':
        {
          'super-effective': new Set(["fire", "ground", "rock"]),
          'not-very-effective': new Set(["water", "grass", "dragon"]),
          'neutral': new Set(['fairy', 'ice', 'dark', 'fighting', 'normal', 'ghost', 'electric', 'flying', 'poison', 'psychic', 'steel', 'bug']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["electric", "grass"]),
          'resists': new Set(["fire", "water", "ice", "steel"]),
          'neutral': new Set(['normal', 'bug', 'ghost', 'poison', 'ground', 'dark', 'psychic', 'fairy', 'rock', 'fighting', 'dragon', 'flying']),
          'immune-to': new Set()
        }
    },
  'electric':
    {
      'offense':
        {
          'super-effective': new Set(["water", "flying"]),
          'not-very-effective': new Set(["electric", "grass", "dragon"]),
          'neutral': new Set(['fighting', 'poison', 'dark', 'rock', 'fire', 'normal', 'ice', 'psychic', 'bug', 'ghost', 'fairy', 'steel']),
          'no-effect': new Set(["ground"])
        },
      'defense':
        {
          'weak-to': new Set(["ground"]),
          'resists': new Set(["electric", "flying", "steel"]),
          'neutral': new Set(['ghost', 'grass', 'water', 'psychic', 'fighting', 'poison', 'normal', 'dark', 'ice', 'rock', 'fairy', 'dragon', 'bug', 'fire']),
          'immune-to': new Set()
        }
    },
  'grass':
    {
      'offense':
        {
          'super-effective': new Set(["water", "ground", "rock"]),
          'not-very-effective': new Set(["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]),
          'neutral': new Set(['psychic', 'fairy', 'normal', 'ghost', 'fighting', 'dark', 'electric', 'ice']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "ice", "poison", "flying", "bug"]),
          'resists': new Set(["water", "electric", "grass", "ground"]),
          'neutral': new Set(['dragon', 'rock', 'fighting', 'normal', 'fairy', 'dark', 'psychic', 'steel', 'ghost']),
          'immune-to': new Set()
        }
    },
  'ice':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "ground", "flying", "dragon"]),
          'not-very-effective': new Set(["fire", "water", "ice", "steel"]),
          'neutral': new Set(['rock', 'normal', 'fairy', 'poison', 'fighting', 'dark', 'bug', 'psychic', 'ghost', 'electric']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "fighting", "rock", "steel"]),
          'resists': new Set(["ice"]),
          'neutral': new Set(['dark', 'electric', 'normal', 'bug', 'fairy', 'ground', 'ghost', 'poison', 'water', 'grass', 'flying', 'dragon', 'psychic']),
          'immune-to': new Set()
        }
    },
  'fighting':
    {
      'offense':
        {
          'super-effective': new Set(["normal", "ice", "rock", "dark", "steel"]),
          'not-very-effective': new Set(["poison", "flying", "psychic", "bug", "fairy"]),
          'neutral': new Set(['fighting', 'dragon', 'ground', 'grass', 'electric', 'fire', 'water']),
          'no-effect': new Set(["ghost"])
        },
      'defense':
        {
          'weak-to': new Set(["flying", "psychic", "fairy"]),
          'resists': new Set(["bug", "rock", "dark"]),
          'neutral': new Set(['normal', 'dragon', 'ground', 'electric', 'poison', 'fighting', 'fire', 'ghost', 'water', 'ice', 'grass', 'steel']),
          'immune-to': new Set()
        }
    },
  'poison':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "fairy"]),
          'not-very-effective': new Set(["poison", "ground", "rock", "ghost"]),
          'neutral': new Set(['fighting', 'dragon', 'ice', 'water', 'electric', 'bug', 'normal', 'fire', 'dark', 'psychic', 'flying']),
          'no-effect': new Set(["steel"])
        },
      'defense':
        {
          'weak-to': new Set(["ground", "psychic"]),
          'resists': new Set(["grass", "fighting", "poison", "bug", "fairy"]),
          'neutral': new Set(['flying', 'ice', 'water', 'fire', 'dragon', 'rock', 'dark', 'steel', 'normal', 'electric', 'ghost']),
          'immune-to': new Set()
        }
    },
  'ground':
    {
      'offense':
        {
          'super-effective': new Set(["fire", "electric", "poison", "rock", "steel"]),
          'not-very-effective': new Set(["grass", "bug"]),
          'neutral': new Set(['dragon', 'normal', 'ground', 'water', 'ghost', 'psychic', 'dark', 'ice', 'fairy', 'fighting']),
          'no-effect': new Set(["flying"])
        },
      'defense':
        {
          'weak-to': new Set(["water", "grass", "ice"]),
          'resists': new Set(["poison", "rock"]),
          'neutral': new Set(['bug', 'ground', 'dragon', 'fire', 'dark', 'flying', 'steel', 'normal', 'ghost', 'psychic', 'fighting', 'fairy']),
          'immune-to': new Set(["electric"])
        }
    },
  'flying':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "fighting", "bug"]),
          'not-very-effective': new Set(["electric", "rock", "steel"]),
          'neutral': new Set(['dark', 'normal', 'flying', 'dragon', 'fairy', 'water', 'ghost', 'ice', 'fire', 'psychic', 'ground', 'poison']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["electric", "ice", "rock"]),
          'resists': new Set(["grass", "fighting", "bug"]),
          'neutral': new Set(['fire', 'steel', 'flying', 'dark', 'dragon', 'poison', 'ghost', 'fairy', 'normal', 'psychic', 'water']),
          'immune-to': new Set(["ground"])
        }
    },
  'psychic':
    {
      'offense':
        {
          'super-effective': new Set(["fighting", "poison"]),
          'not-very-effective': new Set(["psychic", "steel"]),
          'neutral': new Set(['normal', 'dragon', 'ghost', 'rock', 'ground', 'bug', 'grass', 'fire', 'electric', 'ice', 'fairy', 'flying', 'water']),
          'no-effect': new Set(["dark"])
        },
      'defense':
        {
          'weak-to': new Set(["bug", "ghost", "dark"]),
          'resists': new Set(["fighting", "psychic"]),
          'neutral': new Set(['normal', 'water', 'ice', 'fire', 'rock', 'flying', 'grass', 'dragon', 'fairy', 'poison', 'electric', 'ground', 'steel']),
          'immune-to': new Set()
        }
    },
  'bug':
    {
      'offense':
        {
          'super-effective': new Set(["grass", "psychic", "dark"]),
          'not-very-effective': new Set(["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"]),
          'neutral': new Set(['normal', 'bug', 'dragon', 'ground', 'rock', 'water', 'electric', 'ice']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "flying", "rock"]),
          'resists': new Set(["grass", "fighting", "ground"]),
          'neutral': new Set(['fairy', 'bug', 'psychic', 'steel', 'ghost', 'ice', 'water', 'dragon', 'normal', 'electric', 'dark', 'poison']),
          'immune-to': new Set()
        }
    },
  'rock':
    {
      'offense':
        {
          'super-effective': new Set(["fire", "ice", "flying", "bug"]),
          'not-very-effective': new Set(["fighting", "ground", "steel"]),
          'neutral': new Set(['dragon', 'dark', 'ghost', 'normal', 'poison', 'grass', 'psychic', 'water', 'rock', 'fairy', 'electric']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["water", "grass", "fighting", "ground", "steel"]),
          'resists': new Set(["normal", "fire", "poison", "flying"]),
          'neutral': new Set(['rock', 'fairy', 'bug', 'ghost', 'dragon', 'ice', 'electric', 'psychic', 'dark']),
          'immune-to': new Set()
        }
    },
  'ghost':
    {
      'offense':
        {
          'super-effective': new Set(["psychic", "ghost"]),
          'not-very-effective': new Set(["dark"]),
          'neutral': new Set(['rock', 'poison', 'steel', 'grass', 'fire', 'flying', 'electric', 'water', 'ground', 'ice', 'bug', 'dragon', 'fairy', 'fighting']),
          'no-effect': new Set(["normal"])
        },
      'defense':
        {
          'weak-to': new Set(["ghost", "dark"]),
          'resists': new Set(["poison", "bug"]),
          'neutral': new Set(['dragon', 'steel', 'rock', 'flying', 'fairy', 'grass', 'electric', 'ice', 'psychic', 'water', 'fire', 'ground']),
          'immune-to': new Set(["normal", "fighting"])
        }
    },
  'dragon':
    {
      'offense':
        {
          'super-effective': new Set(["dragon"]),
          'not-very-effective': new Set(["steel"]),
          'neutral': new Set(['fire', 'bug', 'rock', 'ice', 'flying', 'ground', 'normal', 'grass', 'poison', 'electric', 'ghost', 'water', 'fighting', 'dark', 'psychic']),
          'no-effect': new Set(["fairy"])
        },
      'defense':
        {
          'weak-to': new Set(["ice", "dragon", "fairy"]),
          'resists': new Set(["fire", "water", "electric", "grass"]),
          'neutral': new Set(['ghost', 'poison', 'normal', 'fighting', 'steel', 'psychic', 'bug', 'ground', 'rock', 'flying', 'dark']),
          'immune-to': new Set()
        }
    },
  'dark':
    {
      'offense':
        {
          'super-effective': new Set(["psychic", "ghost"]),
          'not-very-effective': new Set(["fighting", "dark", "fairy"]),
          'neutral': new Set(['normal', 'rock', 'flying', 'water', 'grass', 'bug', 'steel', 'dragon', 'ground', 'electric', 'fire', 'ice', 'poison']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fighting", "bug", "fairy"]),
          'resists': new Set(["ghost", "dark"]),
          'neutral': new Set(['fire', 'grass', 'dragon', 'poison', 'flying', 'normal', 'water', 'ground', 'ice', 'steel', 'electric', 'rock']),
          'immune-to': new Set(["psychic"])
        }
    },
  'steel':
    {
      'offense':
        {
          'super-effective': new Set(["ice", "rock", "fairy"]),
          'not-very-effective': new Set(["fire", "water", "electric", "steel"]),
          'neutral': new Set(['bug', 'psychic', 'normal', 'flying', 'ground', 'dragon', 'fighting', 'grass', 'dark', 'ghost', 'poison']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["fire", "fighting", "ground"]),
          'resists': new Set(["normal", "grass", "ice", "flying", "psychic", "bug", "rock", "dragon", "steel", "fairy"]),
          'neutral': new Set(['electric', 'dark', 'ghost', 'water']),
          'immune-to': new Set(["poison"])
        }
    },
  'fairy':
    {
      'offense':
        {
          'super-effective': new Set(["fighting", "dragon", "dark"]),
          'not-very-effective': new Set(["fire", "poison", "steel"]),
          'neutral': new Set(['flying', 'ground', 'grass', 'psychic', 'ice', 'ghost', 'bug', 'water', 'fairy', 'rock', 'normal', 'electric']),
          'no-effect': new Set()
        },
      'defense':
        {
          'weak-to': new Set(["poison", "steel"]),
          'resists': new Set(["fighting", "bug", "dark"]),
          'neutral': new Set(['ice', 'fairy', 'fire', 'rock', 'ghost', 'normal', 'psychic', 'grass', 'electric', 'water', 'flying', 'ground']),
          'immune-to': new Set(["dragon"])
        }
    },
};