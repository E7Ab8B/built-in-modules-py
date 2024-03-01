Search.setIndex({"docnames": ["index", "modules/functools/cache", "modules/functools/cached_property", "modules/functools/cmp_to_key", "modules/functools/index", "modules/functools/lru_cache", "modules/functools/partial", "modules/functools/partialmethod", "modules/functools/reduce", "modules/itertools/accumulate", "modules/itertools/chain", "modules/itertools/count", "modules/itertools/cycle", "modules/itertools/dropwhile", "modules/itertools/index"], "filenames": ["index.md", "modules/functools/cache.ipynb", "modules/functools/cached_property.ipynb", "modules/functools/cmp_to_key.ipynb", "modules/functools/index.md", "modules/functools/lru_cache.ipynb", "modules/functools/partial.ipynb", "modules/functools/partialmethod.ipynb", "modules/functools/reduce.ipynb", "modules/itertools/accumulate.ipynb", "modules/itertools/chain.ipynb", "modules/itertools/count.ipynb", "modules/itertools/cycle.ipynb", "modules/itertools/dropwhile.ipynb", "modules/itertools/index.md"], "titles": ["Built-in Modules", "<code class=\"docutils literal notranslate\"><span class=\"pre\">cache()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">cached_property()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">cmp_to_key()</span></code>", "functools", "<code class=\"docutils literal notranslate\"><span class=\"pre\">lru_cache()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">partial()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">partialmethod()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">reduce()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">accumulate()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">chain()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">count()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">cycle()</span></code>", "<code class=\"docutils literal notranslate\"><span class=\"pre\">dropwhile()</span></code>", "itertools"], "terms": {"i": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14], "python": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], "": [0, 5, 6], "resourc": [0, 5, 12], "serv": [0, 8], "refer": [0, 1], "provid": [0, 3, 4, 14], "concis": 0, "descript": 0, "practic": 0, "usag": 0, "exampl": 0, "variou": 0, "function": [0, 1, 2, 3, 5, 6, 7, 8, 9, 11, 13], "come": 0, "pre": 0, "instal": 0, "design": [0, 7], "guid": 0, "offer": [0, 10], "bite": 0, "size": [0, 1], "inform": 0, "whether": 0, "you": [0, 8, 11], "re": 0, "beginn": 0, "look": 0, "brief": 0, "overview": 0, "an": [0, 1, 2, 5, 6, 11, 12, 13], "experienc": 0, "develop": 0, "need": [0, 1, 11], "lookup": [0, 1, 2], "ll": 0, "find": [0, 8, 9], "jupyt": 0, "snippet": 0, "make": [0, 1, 5], "your": 0, "explor": 0, "effici": [0, 2, 10, 14], "effect": [0, 2], "navig": 0, "through": [0, 12], "sidebar": 0, "each": [0, 9, 10, 11], "distil": 0, "view": 0, "essenti": [0, 13], "accompani": 0, "hand": 0, "understand": 0, "start": [0, 11, 12], "specif": 0, "insight": 0, "functool": [0, 1, 2, 3, 5, 6, 7, 8], "higher": [0, 4], "order": [0, 4], "oper": [0, 4, 8, 9, 10], "callabl": [0, 3, 4, 7], "object": [0, 3, 4, 6, 7, 8, 14], "itertool": [0, 9, 10, 11, 12, 13], "creat": [0, 1, 14], "iter": [0, 3, 8, 9, 10, 11, 12, 13, 14], "loop": [0, 12], "offici": 0, "http": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "doc": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "org": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "3": [1, 2, 3, 5, 7, 11, 12], "librari": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "html": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "from": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "import": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "user_funct": [1, 5], "decor": [1, 2, 5], "us": [1, 2, 3, 5, 6, 7, 11, 13], "simpl": 1, "lightweight": 1, "unbound": 1, "sometim": 1, "memoiz": [1, 2, 4, 5], "return": [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13], "same": [1, 2], "lru_cach": [1, 4], "maxsiz": [1, 5], "none": [1, 2, 3, 5, 7, 9, 10], "thin": 1, "wrapper": 1, "around": 1, "dictionari": 1, "argument": [1, 3, 5, 6, 8], "becaus": 1, "never": 1, "evict": 1, "old": 1, "valu": [1, 2, 3, 8, 9, 13], "thi": [1, 2, 3, 5, 6, 11, 13], "smaller": 1, "faster": 1, "than": [1, 3, 5, 7], "limit": 1, "The": [1, 2, 4, 5, 6, 9, 14], "threadsaf": [1, 5], "so": [1, 5, 8], "wrap": [1, 5], "can": [1, 2, 5, 14], "multipl": [1, 5], "thread": [1, 5], "mean": [1, 5], "underli": [1, 5], "data": [1, 5, 9, 10, 13, 14], "structur": [1, 5], "remain": [1, 5], "coher": [1, 5], "dure": [1, 5], "concurr": [1, 5], "updat": [1, 5], "It": [1, 3, 4, 5, 10], "possibl": [1, 5], "call": [1, 5, 6], "more": [1, 5, 6], "onc": [1, 2, 5], "anoth": [1, 3, 5], "addit": [1, 2, 5, 6], "befor": [1, 5, 8], "initi": [1, 5, 8, 9, 13], "ha": [1, 5], "been": [1, 5], "complet": [1, 5], "recurs": [1, 2, 5], "expens": [1, 2, 5], "comput": [1, 2, 5, 6, 7, 9], "web": [1, 2, 5], "scrape": [1, 2, 5], "databas": [1, 2, 5], "queri": [1, 2, 5], "api": [1, 2, 3, 5, 6, 7], "request": [1, 2, 5], "def": [1, 2, 3, 5, 6, 7, 8, 10], "factori": 1, "n": [1, 5], "int": [1, 3, 5, 6], "els": [1, 5], "print": [1, 3, 5, 6, 8, 11, 12], "5": [1, 6, 8, 9, 11, 12], "cache_info": [1, 5], "120": 1, "cacheinfo": [1, 5], "hit": [1, 5], "0": [1, 3, 11, 13], "miss": [1, 5], "6": [1, 9, 11], "currsiz": [1, 5], "720": 1, "7": [1, 8, 11], "10": [1, 2, 5, 6, 9], "3628800": 1, "11": [1, 5], "fibonacci": [1, 5], "55": [1, 5], "8": [1, 5, 8], "89": [1, 5], "12": [1, 5], "func": [2, 3, 6, 7, 9], "transform": 2, "method": [2, 7], "class": [2, 3, 6, 7], "properti": [2, 7], "whose": 2, "cach": [2, 4, 5], "normal": [2, 7], "attribut": 2, "life": 2, "instanc": 2, "similar": 2, "ar": [2, 5, 6, 7, 8, 14], "otherwis": 2, "immut": 2, "mechan": 2, "somewhat": 2, "differ": [2, 5], "A": [2, 3, 10], "regular": 2, "block": [2, 14], "write": 2, "unless": 2, "setter": 2, "defin": 2, "In": 2, "contrast": 2, "allow": [2, 12], "onli": [2, 5], "run": 2, "when": [2, 3, 5, 6, 8, 12], "name": [2, 3], "doesn": 2, "t": [2, 8], "exist": 2, "doe": 2, "subsequ": [2, 13], "read": [2, 5], "take": 2, "preced": 2, "over": [2, 14], "work": [2, 14], "like": [2, 6, 7], "clear": 2, "delet": 2, "again": [2, 12], "statist": 2, "type": [2, 3, 5, 10, 13], "sequenc": [2, 8, 9, 11], "dataset": 2, "__init__": [2, 3, 7], "self": [2, 3, 7], "sequence_of_numb": 2, "float": [2, 6], "_data": 2, "stdev": 2, "varianc": 2, "observ": 2, "rang": [2, 8, 11, 12], "101": 2, "30": [2, 9], "276503540974918": 2, "916": 2, "6666666666666": 2, "If": [2, 5, 6, 8], "mutabl": 2, "map": 2, "avail": 2, "space": [2, 11], "kei": [2, 3, 13], "share": 2, "desir": 2, "achiev": 2, "stack": 2, "top": 2, "__slots__": 2, "convert": [3, 6], "comparison": 3, "primarili": 3, "transit": 3, "tool": [3, 4, 14], "program": [3, 4], "being": [3, 7], "which": [3, 6, 7, 14], "support": 3, "ani": [3, 10], "accept": 3, "two": [3, 8], "compar": 3, "them": [3, 5], "neg": 3, "number": [3, 8, 9, 11, 13], "less": 3, "zero": 3, "equal": 3, "posit": [3, 6], "greater": 3, "one": [3, 10], "sort": 3, "common": 3, "encount": 3, "translat": 3, "algorithm": 3, "other": 3, "languag": 3, "also": 3, "some": [3, 5, 6], "part": 3, "For": [3, 8], "local": 3, "strcoll": 3, "code": 3, "custom": 3, "complex": [3, 14], "logic": 3, "liter": [3, 10], "b": [3, 5, 6, 8, 9, 10], "foo": [3, 10], "f": [3, 5, 6, 8, 9, 12], "bar": [3, 10], "list": [3, 8, 9, 10, 13], "player": 3, "str": [3, 5, 7, 8], "score": 3, "__repr__": 3, "compare_play": 3, "player1": 3, "player2": 3, "alic": 3, "80": [3, 8], "bob": 3, "65": 3, "charli": 3, "90": 3, "dave": 3, "75": 3, "sorted_play": 3, "modul": [4, 14], "includ": 4, "varieti": 4, "enabl": [4, 14], "techniqu": 4, "composit": 4, "partial": [4, 7], "applic": [4, 6, 13], "cached_properti": 4, "cmp_to_kei": 4, "partialmethod": 4, "reduc": 4, "128": 5, "fals": [5, 7, 13], "least": 5, "recent": 5, "set": [5, 14], "lru": 5, "featur": 5, "disabl": 5, "grow": 5, "without": 5, "bound": 5, "true": [5, 7, 13], "separ": 5, "implement": 5, "usual": 5, "regard": 5, "equival": 5, "singl": [5, 8, 10], "result": [5, 6], "mai": 5, "even": 5, "urllib": 5, "error": 5, "32": 5, "get_pep": 5, "num": 5, "byte": 5, "retriev": 5, "text": 5, "enhanc": [5, 10], "propos": 5, "www": 5, "dev": 5, "pep": 5, "04d": 5, "try": 5, "urlopen": 5, "except": [5, 7], "httperror": 5, "290": 5, "308": 5, "320": 5, "length": [5, 13], "len": 5, "119013": 5, "53075": 5, "41339": 5, "21647": 5, "4": [5, 8, 9, 10, 11, 12], "arg": [6, 7], "keyword": [6, 7], "new": [6, 7], "behav": [6, 7], "suppli": 6, "thei": 6, "append": 6, "extend": 6, "overrid": 6, "freez": 6, "portion": 6, "simplifi": [6, 7], "signatur": [6, 7], "delai": [6, 7], "adapt": [6, 7], "basetwo": 6, "base": [6, 13], "__doc__": 6, "string": [6, 9], "10010": 6, "18": 6, "add": [6, 9], "add_5": 6, "15": [6, 9], "sy": 6, "print_stderr": 6, "file": 6, "stderr": 6, "output": 6, "goe": 6, "descriptor": 7, "definit": 7, "rather": 7, "directli": 7, "must": 7, "both": 7, "handl": 7, "cell": 7, "_aliv": 7, "aliv": 7, "bool": 7, "set_stat": 7, "state": 7, "set_al": 7, "set_dead": 7, "c": [7, 9], "anim": 7, "speci": 7, "bear": 7, "_set_speci": 7, "set_dog": 7, "dog": 7, "set_rabbit": 7, "rabbit": 7, "_initial_miss": 8, "appli": [8, 9], "cumul": [8, 9], "item": 8, "left": 8, "right": 8, "lambda": [8, 9, 13], "x": [8, 9, 13], "y": [8, 9], "calcul": 8, "present": 8, "place": 8, "default": 8, "empti": [8, 13], "ad": 8, "flatten": 8, "maximum": [8, 9], "element": [8, 9, 10, 12, 13], "collect": [8, 10, 14], "abc": [8, 10], "mul": 8, "product": [8, 9], "24": 8, "sub": 8, "100": 8, "84": 8, "concatenate_str": 8, "word": 8, "hello": 8, "how": 8, "obtain": 9, "specifi": 9, "binari": 9, "success": 9, "step": [9, 11], "combin": [9, 14], "current": 9, "previou": 9, "sume": 9, "minimum": 9, "prefix": 9, "concaten": [9, 10], "cumulative_sum_seq": 9, "20": 9, "40": 9, "50": 9, "60": 9, "min_prefix_seq": 9, "min": 9, "max_prefix_seq": 9, "max": 9, "d": 9, "e": 9, "cumulative_seq": 9, "memori": [10, 14], "solut": 10, "task": [10, 12], "lazili": 10, "yield": [10, 13], "input": [10, 13], "time": 10, "minim": 10, "perform": 10, "mix": 10, "spam": 10, "r": 10, "gener": [10, 11], "generator1": 10, "generator2": 10, "infinit": [11, 12], "evenli": 11, "integ": 11, "increment": 11, "commonli": 11, "scenario": 11, "where": 11, "consecut": 11, "indefinit": [11, 12], "counter": 11, "_": [11, 12], "next": [11, 12], "7999999999999999": 11, "8999999999999999": 11, "end": 12, "reach": 12, "begin": [12, 13], "repetit": 12, "round": 12, "robin": 12, "schedul": 12, "color": 12, "red": 12, "green": 12, "blue": 12, "colors_seq": 12, "task1": 12, "task2": 12, "task3": 12, "resource1": 12, "resource2": 12, "zipped_it": 12, "zip": 12, "assign": 12, "predic": 13, "skip": 13, "until": 13, "all": 13, "drop": 13, "while": 13, "evalu": 13, "select": 13, "filter": 13, "condit": 13, "preprocess": 13, "000123": 13, "join": 13, "123": 13, "sampl": 13, "1000": 13, "1050": 13, "1080": 13, "1090": 13, "1100": 13, "500": 13, "510": 13, "520": 13, "530": 13, "header": 13, "content": 13, "json": 13, "line": 13, "first": 13, "strip": 13, "power": 14, "These": 14, "manipul": 14, "versatil": 14, "build": 14, "process": 14, "pipelin": 14, "accumul": 14, "chain": 14, "count": 14, "cycl": 14, "dropwhil": 14}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"built": 0, "modul": 0, "purpos": 0, "thi": 0, "document": 0, "how": 0, "us": 0, "quick": 0, "tip": 0, "tabl": 0, "content": 0, "further": 0, "read": 0, "cach": 1, "syntax": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "descript": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "note": [1, 2, 3, 5], "usag": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "exampl": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "1": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "2": [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13], "cached_properti": 2, "cmp_to_kei": 3, "functool": 4, "function": [4, 14], "lru_cach": 5, "partial": 6, "3": [6, 8, 9, 10, 13], "partialmethod": 7, "reduc": 8, "accumul": 9, "chain": 10, "count": 11, "cycl": 12, "dropwhil": 13, "itertool": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Built-in Modules": [[0, "built-in-modules"]], "Purpose of This Documentation": [[0, "purpose-of-this-documentation"]], "How to Use This Documentation": [[0, "how-to-use-this-documentation"]], "Quick Tips": [[0, "quick-tips"]], "Table of Contents": [[0, "table-of-contents"]], "Further Reading": [[0, "further-reading"]], "cache()": [[1, "cache"]], "Syntax": [[1, "syntax"], [2, "syntax"], [3, "syntax"], [5, "syntax"], [6, "syntax"], [7, "syntax"], [8, "syntax"], [9, "syntax"], [10, "syntax"], [11, "syntax"], [12, "syntax"], [13, "syntax"]], "Description": [[1, "description"], [2, "description"], [3, "description"], [5, "description"], [6, "description"], [7, "description"], [8, "description"], [9, "description"], [10, "description"], [11, "description"], [12, "description"], [13, "description"]], "Note": [[1, "note"], [2, "note"], [3, "note"], [5, "note"]], "Usage": [[1, "usage"], [2, "usage"], [3, "usage"], [5, "usage"], [6, "usage"], [7, "usage"], [8, "usage"], [9, "usage"], [10, "usage"], [11, "usage"], [12, "usage"], [13, "usage"]], "Examples": [[1, "examples"], [2, "examples"], [3, "examples"], [5, "examples"], [6, "examples"], [7, "examples"], [9, "examples"], [10, "examples"], [11, "examples"], [12, "examples"], [13, "examples"]], "Example #1": [[1, "example-1"], [2, "example-1"], [3, "example-1"], [5, "example-1"], [6, "example-1"], [7, "example-1"], [8, "example-1"], [10, "example-1"], [12, "example-1"]], "Example #2": [[1, "example-2"], [3, "example-2"], [5, "example-2"], [6, "example-2"], [7, "example-2"], [8, "example-2"], [10, "example-2"], [12, "example-2"]], "cached_property()": [[2, "cached-property"]], "cmp_to_key()": [[3, "cmp-to-key"]], "functools": [[4, "functools"]], "Functions": [[4, null], [14, null]], "lru_cache()": [[5, "lru-cache"]], "partial()": [[6, "partial"]], "Example #3": [[6, "example-3"], [8, "example-3"]], "partialmethod()": [[7, "partialmethod"]], "reduce()": [[8, "reduce"]], "Example": [[8, "example"]], "accumulate()": [[9, "accumulate"]], "Example 1": [[9, "example-1"], [11, "example-1"], [13, "example-1"]], "Example 2": [[9, "example-2"], [11, "example-2"], [13, "example-2"]], "Example 3": [[9, "example-3"], [13, "example-3"]], "chain()": [[10, "chain"]], "Examples #3": [[10, "examples-3"]], "count()": [[11, "count"]], "cycle()": [[12, "cycle"]], "dropwhile()": [[13, "dropwhile"]], "itertools": [[14, "itertools"]]}, "indexentries": {}})