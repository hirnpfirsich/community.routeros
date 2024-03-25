Search.setIndex({"docnames": ["api_facts_module", "api_find_and_modify_module", "api_info_module", "api_modify_module", "api_module", "command_module", "docsite/api-guide", "docsite/quoting", "docsite/ssh-guide", "environment_variables", "facts_module", "index", "join_filter", "list_to_dict_filter", "quote_argument_filter", "quote_argument_value_filter", "routeros_cliconf", "split_filter"], "filenames": ["api_facts_module.rst", "api_find_and_modify_module.rst", "api_info_module.rst", "api_modify_module.rst", "api_module.rst", "command_module.rst", "docsite/api-guide.rst", "docsite/quoting.rst", "docsite/ssh-guide.rst", "environment_variables.rst", "facts_module.rst", "index.rst", "join_filter.rst", "list_to_dict_filter.rst", "quote_argument_filter.rst", "quote_argument_value_filter.rst", "routeros_cliconf.rst", "split_filter.rst"], "titles": ["community.routeros.api_facts module \u2013 Collect facts from remote devices running MikroTik RouterOS using the API", "community.routeros.api_find_and_modify module \u2013 Find and modify information using the API", "community.routeros.api_info module \u2013 Retrieve information from API", "community.routeros.api_modify module \u2013 Modify data at paths with API", "community.routeros.api module \u2013 Ansible module for RouterOS API", "community.routeros.command module \u2013 Run commands on remote devices running MikroTik RouterOS", "How to connect to RouterOS devices with the RouterOS API", "How to quote and unquote commands and arguments", "How to connect to RouterOS devices with SSH", "Index of all Collection Environment Variables", "community.routeros.facts module \u2013 Collect facts from remote devices running MikroTik RouterOS", "Community.Routeros", "community.routeros.join filter \u2013 Join a list of arguments to a command", "community.routeros.list_to_dict filter \u2013 Convert a list of arguments to a dictionary", "community.routeros.quote_argument filter \u2013 Quote an argument", "community.routeros.quote_argument_value filter \u2013 Quote an argument value", "community.routeros.routeros cliconf \u2013 Use routeros cliconf to run command on MikroTik RouterOS platform", "community.routeros.split filter \u2013 Split a command into arguments"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16, 17], "part": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "version": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17], "2": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17], "14": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "0": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17], "It": [0, 1, 2, 3, 4, 5, 6, 7, 10, 12, 13, 14, 15, 16, 17], "includ": [0, 1, 2, 3, 4, 5, 6, 10, 12, 13, 14, 15, 16, 17], "ansibl": [0, 1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], "core": [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14, 15, 16, 17], "To": [0, 1, 2, 3, 4, 5, 6, 10, 12, 13, 14, 15, 16, 17], "check": [0, 1, 2, 3, 4, 5, 6, 10, 12, 13, 14, 15, 16, 17], "whether": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "instal": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "galaxi": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "list": [0, 1, 2, 3, 4, 5, 7, 10, 11, 14, 15, 16, 17], "you": [0, 1, 2, 3, 4, 5, 6, 7, 8], "need": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "further": [0, 1, 2, 3, 4], "abl": [0, 1, 2, 3, 4, 6], "detail": [0, 1, 2, 3, 4, 5, 6, 8, 10], "playbook": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17], "specifi": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17], "new": [0, 1, 2, 3, 12, 13, 14, 15, 17], "1": [0, 1, 2, 3, 4, 5, 6, 8, 10], "base": [0, 1, 6, 8, 10], "set": [0, 1, 2, 3, 4, 5, 7, 9, 10, 13], "prepend": [0, 1, 2, 3, 10], "all": [0, 1, 2, 3, 4, 5, 6, 10], "network": [0, 1, 2, 3, 4, 6, 10, 11, 16], "kei": [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 13, 14, 15, 17], "ansible_net_": [0, 10], "The": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 17], "alwai": [0, 2, 3, 4, 5, 6, 10], "can": [0, 1, 2, 3, 4, 5, 6, 8, 10, 13], "enabl": [0, 6, 10], "disabl": [0, 1, 2, 3, 6, 10], "addit": [0, 10], "As": 0, "oppos": 0, "similar": [0, 8], "below": [0, 1, 2, 3, 4], "ar": [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13], "host": [0, 1, 2, 3, 4, 6, 8, 10], "execut": [0, 1, 2, 3, 4, 5, 8], "libroutero": [0, 1, 2, 3, 4], "python": [0, 1, 2, 3, 4, 6, 8], "3": [0, 1, 2, 3, 4, 5, 8], "6": [0, 1, 2, 3, 4, 8], "comment": [0, 1, 2, 3, 4, 5, 7, 10, 12, 13, 14, 15, 17], "ca_path": [0, 1, 2, 3, 4, 6], "path": [0, 1, 2, 4, 6, 11], "ad": [0, 1, 2, 3, 4, 8, 10], "pem": [0, 1, 2, 3, 4, 6], "format": [0, 1, 2, 3, 4], "file": [0, 1, 2, 3, 4, 6, 8], "contain": [0, 1, 2, 3, 4, 5, 7, 8, 10], "ca": [0, 1, 2, 3, 4, 6], "certif": [0, 1, 2, 3, 4], "valid": [0, 1, 2, 3, 4, 5, 6], "validate_cert_hostnam": [0, 1, 2, 3, 4, 6], "onli": [0, 1, 2, 3, 4, 5, 6, 8, 10], "when": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 13], "tl": [0, 1, 2, 3, 4, 6], "true": [0, 1, 2, 3, 4, 5, 6, 7, 13], "validate_cert": [0, 1, 2, 3, 4, 6], "encod": [0, 1, 2, 3, 4], "string": [0, 1, 2, 3, 4, 5, 7, 8, 10, 12, 13, 14, 15, 17], "default": [0, 1, 2, 3, 4, 5, 7, 8, 10, 13], "ascii": [0, 1, 2, 3, 4], "note": [0, 2], "utf": [0, 1, 2, 3, 4], "8": [0, 1, 2, 3, 4], "newer": [0, 1, 2, 3, 4, 11], "force_no_cert": [0, 1, 2, 3, 4, 6], "boolean": [0, 1, 2, 3, 4, 13], "4": [0, 1, 2, 3, 4, 8], "connect": [0, 1, 2, 3, 4, 5, 10, 11], "without": [0, 1, 2, 3, 4, 5, 6, 7, 10, 13], "forc": [0, 1, 2, 3, 4], "anonym": [0, 1, 2, 3, 4], "diffi": [0, 1, 2, 3, 4], "hellman": [0, 1, 2, 3, 4], "adh": [0, 1, 2, 3, 4], "cipher": [0, 1, 2, 3, 4], "protocol": [0, 1, 2, 3, 4], "suscept": [0, 1, 2, 3, 4, 6], "man": [0, 1, 2, 3, 4, 6], "middl": [0, 1, 2, 3, 4, 6], "attack": [0, 1, 2, 3, 4, 6], "becaus": [0, 1, 2, 3, 4], "exchang": [0, 1, 2, 3, 4], "authent": [0, 1, 2, 3, 4], "instead": [0, 1, 2, 3, 4, 6, 8], "simpli": [0, 1, 2, 3, 4, 5], "make": [0, 1, 2, 3, 4, 8], "thing": [0, 1, 2, 3, 4], "work": [0, 1, 2, 3, 4, 6], "have": [0, 1, 2, 3, 4, 5, 6, 8, 9, 12, 13, 14, 15, 16, 17], "look": [0, 1, 2, 3, 4], "choic": [0, 1, 2, 3, 4, 5, 13], "fals": [0, 1, 2, 3, 4, 6, 7, 8, 13], "gather_subset": [0, 10], "element": [0, 1, 2, 3, 4, 5, 10, 12, 13, 17], "suppli": [0, 10], "argument": [0, 4, 5, 10, 11], "restrict": [0, 4, 10], "given": [0, 1, 4, 10], "subset": [0, 10], "possibl": [0, 10], "valu": [0, 6, 7, 10, 11], "hardwar": [0, 10], "interfac": [0, 1, 2, 3, 4, 5, 6, 10], "rout": [0, 2, 3, 10], "larger": [0, 1, 10], "an": [0, 1, 2, 3, 4, 5, 6, 7, 10, 11], "initi": [0, 10], "specif": [0, 1, 4, 5, 6, 10], "should": [0, 1, 3, 5, 6, 8, 10, 12, 14, 15, 17], "hostnam": [0, 1, 2, 3, 4, 6, 10], "password": [0, 1, 2, 3, 4, 6, 8], "user": [0, 1, 2, 3, 4, 8, 11], "port": [0, 1, 2, 3, 4], "integ": [0, 1, 2, 3, 4, 5, 10], "If": [0, 1, 2, 3, 4, 5, 6, 8], "appli": [0, 1, 2, 3, 4], "ssl": [0, 1, 2, 3, 4, 6], "8728": [0, 1, 2, 3, 4], "http": [0, 1, 2, 3, 4, 6], "8729": [0, 1, 2, 3, 4], "timeout": [0, 1, 2, 3, 4], "request": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "10": [0, 1, 2, 3, 4, 5, 11], "alias": [0, 1, 2, 3, 4], "usernam": [0, 1, 2, 3, 4, 6, 8], "login": [0, 1, 2, 3, 4, 8], "skip": [0, 1, 2, 3, 4, 6, 7, 8, 13], "deactiv": [0, 1, 2, 3, 4], "pleas": [0, 1, 2, 3, 4, 6, 8], "consid": [0, 1, 2, 3, 4, 5], "creat": [0, 1, 2, 3, 4, 6], "your": [0, 1, 2, 3, 4, 6, 8], "own": [0, 1, 2, 3, 4, 6], "sign": [0, 1, 2, 3, 4, 6], "router": [0, 1, 2, 3, 4, 8], "tell": [0, 1, 2, 3, 4, 8], "about": [0, 1, 2, 3, 4, 8], "option": [0, 1, 2, 3, 4, 6, 7, 8], "support": [0, 1, 2, 3, 4, 5, 8, 10, 11], "descript": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 17], "action_group": [0, 1, 2, 3, 4], "action": [0, 1, 2, 3, 4, 5, 10], "group": [0, 1, 2, 3, 4], "module_default": [0, 1, 2, 3, 4, 6], "check_mod": [0, 1, 2, 3, 4, 5, 10], "full": [0, 1, 2, 3, 10], "doe": [0, 2, 5, 8, 10], "modifi": [0, 2, 4, 5, 6, 10, 11], "state": [0, 2, 10], "chang": [0, 1, 2, 3, 4, 5, 6, 8, 10], "statu": [0, 1, 2, 3, 4, 5, 10], "predict": [0, 1, 2, 3, 4, 5, 10], "target": [0, 1, 2, 3, 4, 5, 10], "diff_mod": [0, 1, 2, 3, 4, 5, 10], "n": [0, 1, 2, 10], "A": [0, 1, 2, 3, 4, 10, 12, 13, 17], "Will": [0, 1, 2, 3, 4, 5, 10], "what": [0, 1, 2, 3, 4, 5, 10], "ha": [0, 1, 2, 3, 4, 5, 6, 7, 10], "possibli": [0, 1, 2, 3, 4, 5, 10], "diff": [0, 1, 2, 3, 4, 5, 10], "mode": [0, 1, 2, 3, 4, 5, 6, 10], "ansible_fact": [0, 10], "dictionari": [0, 1, 2, 3, 4, 7, 10, 11], "updat": [0, 2, 3, 4, 10], "exist": [0, 2, 3, 4, 10], "platform": [0, 1, 2, 3, 4, 5, 8, 10, 11], "o": [0, 1, 2, 3, 4, 5, 10], "famili": [0, 1, 2, 3, 4, 5, 10], "oper": [0, 1, 2, 3, 4, 5, 10], "against": [0, 1, 2, 3, 4, 5, 10], "api_find_and_modifi": [0, 2, 3, 4, 6, 11], "find": [0, 2, 3, 4, 6, 11], "inform": [0, 3, 4, 6, 10, 11], "api_info": [0, 1, 3, 4, 6, 11], "retriev": [0, 1, 3, 4, 6, 11], "api_modifi": [0, 1, 2, 4, 6, 11], "data": [0, 1, 2, 4, 6, 7, 11, 13], "how": [0, 1, 2, 3, 4, 5, 10, 11], "name": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 17], "192": [0, 1, 2, 3, 4, 6, 8], "168": [0, 1, 2, 3, 4, 6, 8], "88": [0, 1, 2, 3], "admin": [0, 3, 6, 8], "do": [0, 3, 6, 8, 10], "hostvar": [0, 10], "referenc": [0, 10], "just": [0, 2, 10], "like": [0, 1, 7, 8, 10], "ani": [0, 4, 5, 6, 10], "other": [0, 2, 4, 7, 10], "thei": [0, 2, 3, 10], "regist": [0, 2, 4, 6, 8, 10], "order": [0, 3, 10, 12, 13, 14, 15, 16, 17], "them": [0, 3, 4, 7, 10], "ansible_net_all_ipv4_address": [0, 8, 10], "ipv4": [0, 10], "address": [0, 1, 2, 3, 4, 6, 7, 8, 10], "configur": [0, 1, 2, 3, 5, 6, 9, 10, 12, 13, 14, 15, 16, 17], "ansible_net_all_ipv6_address": [0, 10], "ipv6": [0, 2, 3, 10], "ansible_net_arch": [0, 10], "cpu": [0, 8, 10], "architectur": [0, 8, 10], "ansible_net_bgp_inst": [0, 10], "bgp": [0, 2, 3, 10], "instanc": [0, 2, 3, 10], "ansible_net_bgp_p": [0, 10], "peer": [0, 2, 3, 10], "ansible_net_bgp_vpnv4_rout": [0, 10], "vpnv4": [0, 10], "ansible_net_cpu_load": [0, 10], "current": [0, 1, 2, 3, 10], "load": [0, 8, 10], "ansible_net_gather_subset": [0, 10], "ansible_net_hostnam": [0, 10], "ansible_net_interfac": [0, 10], "hash": [0, 10], "system": [0, 2, 3, 4, 5, 8, 10], "ansible_net_memfree_mb": [0, 10], "avail": [0, 6, 10], "free": [0, 8, 10], "memori": [0, 8, 10], "mib": [0, 10], "ansible_net_memtotal_mb": [0, 10], "total": [0, 8, 10], "ansible_net_model": [0, 10], "model": [0, 10], "ansible_net_neighbor": [0, 10], "neighbor": [0, 2, 3, 10], "ansible_net_ospf_inst": [0, 10], "ospf": [0, 2, 3, 10], "ansible_net_ospf_neighbor": [0, 10], "ansible_net_rout": [0, 10], "tabl": [0, 2, 3, 10], "ansible_net_serialnum": [0, 10], "serial": [0, 10], "number": [0, 1, 4, 5, 10], "ansible_net_spacefree_mb": [0, 10], "disk": [0, 10], "space": [0, 4, 7, 8, 10], "ansible_net_spacetotal_mb": [0, 10], "ansible_net_uptim": [0, 10], "uptim": [0, 8, 10], "ansible_net_vers": [0, 10], "egor": [0, 5, 10, 11, 16], "zaitsev": [0, 5, 10, 11, 16], "heuel": [0, 5, 10, 11, 16], "nikolai": [0, 4, 11], "dachev": [0, 4, 11], "nikolaydachev": [0, 4, 11], "felix": [0, 1, 2, 3, 11, 12, 13, 14, 15, 17], "fontein": [0, 1, 2, 3, 11, 12, 13, 14, 15, 17], "felixfontein": [0, 1, 2, 3, 11, 12, 13, 14, 15, 17], "issu": [0, 1, 2, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16, 17], "tracker": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "repositori": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "sourc": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "submit": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "bug": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "report": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "featur": [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 16, 17], "run": [1, 2, 3, 4, 6, 8, 11, 12, 13, 14, 15, 17], "allow": [1, 2, 3, 4, 6, 7, 8, 13], "entri": [1, 2, 3, 4, 6, 12, 13, 14, 15, 16, 17], "condit": [1, 3, 4, 5], "multipl": [1, 3, 5], "differ": [1, 3, 4, 6], "wai": [1, 3, 4, 6], "one": [1, 3, 4, 5, 7], "step": 1, "allow_no_match": 1, "match": [1, 4, 5, 6], "found": [1, 2, 3], "induc": 1, "from": [1, 3, 4, 5, 6, 11, 16], "require_matches_min": 1, "devic": [1, 2, 3, 4, 11, 16], "field": [1, 2, 3, 4, 5], "search": [1, 3], "provid": [1, 3, 5, 7, 16], "here": [1, 2, 3, 4, 5, 6], "yaml": 1, "unset": [1, 2, 3], "empti": [1, 3, 4, 7, 13], "everi": [1, 4, 5, 6, 8], "queri": [1, 2, 3, 4], "ip": [1, 2, 3, 4, 6, 7, 8], "equival": [1, 2, 3, 4, 6], "cli": [1, 2, 3, 4, 12, 14, 15, 16], "require_matches_max": 1, "sure": [1, 6, 8], "more": [1, 4, 6], "than": [1, 4, 8], "fail": [1, 3, 5, 6, 8], "anyth": 1, "upper": 1, "limit": 1, "less": [1, 4, 6], "On": 1, "want": [1, 2, 3], "old": 1, "foo": [1, 7, 12, 13, 17], "bar": [1, 7, 12, 13, 17], "least": [1, 3, 4], "togeth": [1, 8], "latter": 1, "case": [1, 4, 6, 7], "idempot": [1, 3, 10], "task": [1, 5, 6, 7, 8], "onc": [1, 6], "been": [1, 6, 9], "api_fact": [1, 2, 3, 4, 6, 11], "fact": [1, 2, 3, 4, 6, 8, 11], "remot": [1, 2, 3, 4, 11], "mikrotik": [1, 2, 3, 4, 8, 11], "renam": 1, "bridg": [1, 2, 3, 6], "my": 1, "assum": [1, 3, 6], "24": [1, 2, 3, 4, 6], "zero": 1, "we": [1, 3, 4, 6], "expect": [1, 8], "exactli": [1, 3], "common": [1, 2, 3, 4, 5, 6], "document": [1, 2, 3, 4, 5, 6, 8, 9], "follow": [1, 2, 3, 4, 5, 6, 8, 9, 13], "uniqu": [1, 2, 3, 4, 5], "match_count": 1, "criteria": 1, "success": [1, 12, 13, 14, 15, 17], "sampl": [1, 2, 3, 4, 5], "modify__count": 1, "were": 1, "new_data": [1, 3], "after": [1, 3, 4], "wa": [1, 3, 10], "made": [1, 3], "id": [1, 2, 3, 4], "actual": [1, 2, 3, 5], "awesom": [1, 3], "dynam": [1, 2, 3], "invalid": [1, 2, 3], "old_data": [1, 3], "befor": [1, 3, 5, 8, 12, 13, 14, 15, 17], "defconf": [1, 2, 3], "us": [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], "backup": [2, 3], "restor": [2, 3], "normal": 2, "builtin": [2, 3, 4, 6, 12, 13, 14, 15, 17], "handle_dis": 2, "hide_default": 2, "control": [2, 3, 4, 6], "include_dynam": 2, "include_builtin": 2, "resp": 2, "unfilt": 2, "counter": 2, "still": [2, 3], "heavili": [2, 3], "develop": [2, 3], "some": [2, 3, 7], "think": [2, 3], "problem": [2, 3, 6, 8], "first": [2, 3, 6, 8, 10], "handl": [2, 3], "exclam": 2, "output": [2, 4, 5, 6, 8], "null": [2, 3], "regular": 2, "omit": 2, "result": [2, 3, 5, 6, 8, 12, 13, 14, 15, 17], "hide": 2, "By": 2, "well": [2, 6], "include_read_onli": 2, "read": [2, 3, 5], "print": [2, 4, 5, 6, 8], "cap": [2, 3], "aaa": [2, 3], "access": [2, 3, 6], "channel": [2, 3, 11], "datapath": [2, 3], "manag": [2, 3], "provis": [2, 3], "secur": [2, 3], "bond": [2, 3], "mlag": [2, 3], "extend": [2, 3, 4], "vlan": [2, 3], "detect": [2, 3], "internet": [2, 3], "eoip": [2, 3], "ethernet": [2, 3, 5], "poe": [2, 3], "switch": [2, 3], "gre": [2, 3], "gre6": [2, 3], "l2tp": [2, 3], "server": [2, 3], "member": [2, 3], "ovpn": [2, 3], "client": [2, 3], "ppp": [2, 3], "pppoe": [2, 3], "pptp": [2, 3], "sstp": [2, 3], "vrrp": [2, 3], "wifi": [2, 3], "capsman": [2, 3], "interwork": [2, 3], "steer": [2, 3], "wifiwave2": [2, 3], "wireguard": [2, 3], "wireless": [2, 3], "align": [2, 3], "profil": [2, 3], "sniffer": [2, 3], "snooper": [2, 3], "iot": [2, 3], "modbu": [2, 3], "account": [2, 3], "web": [2, 3], "arp": [2, 3], "cloud": [2, 3], "advanc": [2, 3], "dhcp": [2, 3], "config": [2, 3, 4, 10], "leas": [2, 3], "dn": [2, 3, 6], "static": [2, 3], "firewal": [2, 3], "track": [2, 3], "filter": [2, 3, 7], "layer7": [2, 3], "mangl": [2, 3], "nat": [2, 3], "raw": [2, 3], "servic": [2, 3, 6], "hotspot": [2, 3], "ipsec": [2, 3], "ident": [2, 3, 4, 5, 8, 10], "polici": [2, 3, 5], "propos": [2, 3], "discoveri": [2, 3], "pool": [2, 3], "proxi": [2, 3], "vrf": [2, 3], "smb": [2, 3], "sock": [2, 3], "ssh": [2, 3, 5, 6, 10, 11], "tftp": [2, 3], "traffic": [2, 3], "flow": [2, 3], "ipfix": [2, 3], "upnp": [2, 3], "nd": [2, 3], "prefix": [2, 3], "mpl": [2, 3], "ldp": [2, 3], "firmwar": [2, 3], "queue": [2, 3], "tree": [2, 3], "radiu": [2, 3], "incom": [2, 3], "templat": [2, 3], "rule": [2, 3], "select": [2, 3, 4], "mme": [2, 3], "area": [2, 3], "rang": [2, 3], "pimsm": [2, 3], "rip": [2, 3], "ripng": [2, 3], "snmp": [2, 3], "clock": [2, 3], "manual": [2, 3], "led": [2, 3], "log": [2, 3], "ntp": [2, 3], "packag": [2, 3], "routerboard": [2, 3, 5], "schedul": [2, 3], "script": [2, 3, 4], "upgrad": [2, 3], "mirror": [2, 3], "up": [2, 3, 12, 13, 14, 15, 16, 17], "watchdog": [2, 3], "tool": [2, 3], "bandwidth": [2, 3], "e": [2, 3], "mail": [2, 3, 11], "graph": [2, 3], "resourc": [2, 3, 5, 8], "mac": [2, 3], "winbox": [2, 3], "ping": [2, 3], "netwatch": [2, 3], "romon": [2, 3], "sm": [2, 3], "gener": [2, 3, 6, 11], "ones": [2, 3], "input": [2, 4, 6], "get": [2, 4, 6], "ip_address": 2, "debug": [2, 4, 6, 8], "var": [2, 6, 8], "depend": [3, 6], "ignor": [3, 6, 8], "ordereddict": 3, "ensur": 3, "present": 3, "appear": 3, "ensure_ord": 3, "same": 3, "handle_absent_entri": 3, "remov": [3, 4, 6], "handle_entries_cont": 3, "For": [3, 4, 12, 13, 14, 15, 16, 17], "singl": 3, "describ": [3, 6, 12, 13, 14, 15, 17], "mention": 3, "cannot": 3, "remove_as_much_as_poss": 3, "kept": 3, "write": [3, 8], "handle_read_onli": 3, "pass": [3, 5, 7], "creation": 3, "compar": [3, 4], "object": [3, 4, 6], "error": [3, 5, 8], "handle_write_onli": 3, "create_onli": 3, "always_upd": 3, "mean": 3, "sinc": [3, 6, 8], "modif": [3, 4], "command": [3, 4, 6, 8, 11, 14, 15], "strict": 3, "sens": [3, 10], "verifi": 3, "behavior": 3, "setup": [3, 6], "two": [3, 7, 8], "gatewai": 3, "custom": 3, "netmask": 3, "adjust": 3, "masquerad": 3, "chain": 3, "srcnat": 3, "wan": 3, "out": [3, 5, 6], "three": [3, 6], "noth": 3, "none": [3, 4, 5], "librari": 4, "add": [4, 6, 8], "arbitrari": [4, 5, 8], "via": [4, 8], "32": [4, 6], "ether1": [4, 5], "cmd": 4, "03": 4, "extended_queri": 4, "conjunct": [4, 5], "where": 4, "claus": 4, "must": [4, 5], "its": [4, 6, 8], "either": [4, 6], "equal": 4, "eq": 4, "In": 4, "so": [4, 13], "main": 4, "item": 4, "aip": 4, "word": 4, "which": [4, 6, 7, 8], "mtu": 4, "mut": 4, "1400": 4, "bigger": 4, "replac": [4, 8], "mutual": 4, "exclus": 4, "quot": [4, 5, 11, 12], "unquot": [4, 5, 11], "ipaddrd_printout": 4, "dump": 4, "msg": [4, 6, 8], "255": 4, "ether2": 4, "ip2": 4, "queryout": 4, "20": 4, "36": 4, "extended_queryout": 4, "quote_argument_valu": [4, 7, 11], "arbitraryout": 4, "messag": 4, "5": 4, "send": [5, 16], "node": 5, "caus": 5, "wait": 5, "time": [5, 8], "met": 5, "indic": 5, "changed_when": [5, 6], "properti": 5, "determin": 5, "requir": [5, 7, 12, 13, 14, 15, 17], "over": 5, "wait_for": 5, "until": 5, "satisfi": 5, "retri": 5, "expir": 5, "interv": 5, "second": 5, "between": [5, 10], "long": [5, 8], "try": 5, "again": 5, "tri": 5, "evalu": 5, "each": [5, 12, 13, 14, 15, 16, 17], "move": 5, "forward": [5, 8], "within": 5, "partial": 5, "claim": 5, "declar": [5, 9], "x86": 5, "failed_condit": 5, "stdout": 5, "respons": 5, "apart": 5, "low": [5, 12, 13, 14, 15, 16, 17], "level": [5, 16], "plugin": [5, 7, 8, 9, 12, 13, 14, 15, 16, 17], "stdout_lin": [5, 6, 8], "split": [5, 7, 11, 13], "certain": 6, "predefin": 6, "No": [6, 9], "special": 6, "": [6, 8, 10, 15], "most": 6, "localhost": 6, "delegate_to": 6, "exampl": [6, 7, 8, 16], "show": [6, 8], "test": [6, 8], "gather_fact": [6, 8], "test1234": [6, 8], "print_path": 6, "plai": [6, 8], "ok": [6, 8], "recap": [6, 8], "unreach": [6, 8], "rescu": [6, 8], "avoid": 6, "paramet": [6, 12, 14, 15, 17], "gather": [6, 8], "recommend": 6, "even": 6, "through": 6, "trust": 6, "discourag": 6, "product": 6, "might": 6, "verif": 6, "dure": 6, "usual": 6, "correctli": 6, "chosen": 6, "backward": 6, "compat": 6, "older": 6, "commerci": 6, "truststor": 6, "point": 6, "correct": 6, "That": 6, "fulli": 6, "talk": 6, "instruct": 6, "crypto": 6, "small": 6, "guid": 6, "subject": 6, "altern": [6, 8], "local": 6, "best": 6, "done": 6, "see": [6, 8], "easier": 6, "quit": 6, "few": 6, "return": 6, "json": 6, "text": [6, 7], "pars": 6, "convert": [6, 11], "privat": 6, "pkc": 6, "12": 6, "bundl": 6, "openssl_pkcs12": 6, "inventory_hostnam": 6, "random": 6, "passphras": 6, "protect": 6, "block": [6, 8], "set_fact": [6, 12, 13, 14, 15, 17], "random_password": 6, "lookup": 6, "random_str": 6, "length": 6, "override_al": 6, "0123456789abcdefghijklmnopqrstuvwxyz": 6, "p12": 6, "certificate_path": 6, "privatekey_path": 6, "friendly_nam": 6, "0600": 6, "copi": 6, "onto": 6, "netcommon": [6, 8], "net_put": 6, "src": 6, "dest": 6, "clean": 6, "import": 6, "pkcs12": 6, "wipe": 6, "www": 6, "admin_network": 6, "also": [6, 8], "complet": 6, "successfulli": 6, "reachabl": 6, "browser": 6, "insert": 6, "commun": [7, 8], "routero": 7, "modul": [7, 8], "api": [7, 11, 16], "form": [7, 10], "while": 7, "collect": [7, 8, 11], "jinja2": 7, "help": 7, "quote_argu": [7, 11], "join": [7, 11], "list_to_dict": [7, 11], "require_assign": [7, 13], "accept": [7, 13], "skip_empty_valu": [7, 13], "whose": [7, 13], "offer": 8, "devi": 8, "network_cli": 8, "symbol": 8, "troubl": 8, "alphanumer": 8, "charact": 8, "dash": 8, "longer": 8, "19": 8, "happen": 8, "unsupport": 8, "nest": 8, "start": 8, "slash": 8, "produc": 8, "too": 8, "someth": 8, "cet512w": 8, "wrap": 8, "512": 8, "line": [8, 10], "paramiko": 8, "ssh_type": 8, "libssh": 8, "pylibssh": 8, "bind": 8, "modern": 8, "ansible_host": 8, "ansible_connect": 8, "ansible_network_o": 8, "ansible_us": 8, "ansible_ssh_pass": 8, "call": 8, "cliconf": 8, "credenti": 8, "store": 8, "With": 8, "abov": 8, "system_resource_print": 8, "3d10h28m51": 8, "48": 8, "stabl": 8, "build": 8, "mai": 8, "25": 8, "2021": 8, "06": 8, "09": 8, "45": 8, "31": 8, "2mib": 8, "64": 8, "0mib": 8, "mip": 8, "24kc": 8, "v7": 8, "count": 8, "frequenc": 8, "400mhz": 8, "hdd": 8, "54": 8, "128": 8, "sect": 8, "reboot": 8, "927": 8, "51572981": 8, "bad": 8, "mipsb": 8, "board": 8, "rb750gl": 8, "defin": 9, "ansible_net_config": 10, "activ": 10, "ansible_net_config_nonverbos": 10, "minim": 10, "twice": 10, "achiev": 10, "export": 10, "strip": 10, "timestamp": 10, "author": 11, "github": 11, "com": 11, "9": 11, "matrix": 11, "room": 11, "im": 11, "usag": 11, "question": 11, "irc": 11, "libera": 11, "project": 11, "subscrib": 11, "These": [11, 13], "type": [12, 13, 14, 15, 16, 17], "high": [12, 13, 14, 15, 16, 17], "prioriti": [12, 13, 14, 15, 16, 17], "variabl": [12, 13, 14, 15, 16, 17], "lower": [12, 13, 14, 15, 16, 17], "overrid": [12, 13, 14, 15, 16, 17], "higher": [12, 13, 14, 15, 16, 17], "assign": 13, "key1": 13, "value1": 13, "key2": 13, "value2": 13, "represent": 13, "abstract": 16, "receiv": 16, "argument_list": 17, "baz": 17}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"commun": [0, 1, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 15, 16, 17], "routero": [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17], "api_fact": 0, "modul": [0, 1, 2, 3, 4, 5, 6, 10, 11], "collect": [0, 1, 2, 3, 4, 5, 9, 10, 12, 13, 14, 15, 16, 17], "fact": [0, 10], "from": [0, 2, 10], "remot": [0, 5, 10], "devic": [0, 5, 6, 8, 10], "run": [0, 5, 10, 16], "mikrotik": [0, 5, 6, 10, 16], "us": [0, 1, 6, 16], "api": [0, 1, 2, 3, 4, 6], "synopsi": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "requir": [0, 1, 2, 3, 4], "paramet": [0, 1, 2, 3, 4, 5, 10, 13], "attribut": [0, 1, 2, 3, 4, 5, 10], "see": [0, 1, 2, 3, 4, 5, 10], "also": [0, 1, 2, 3, 4, 5, 10], "exampl": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 17], "return": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 17], "author": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "link": [0, 1, 2, 3, 4, 5, 10, 12, 13, 14, 15, 16, 17], "api_find_and_modifi": 1, "find": 1, "modifi": [1, 3], "inform": [1, 2], "note": [1, 3, 4, 5, 8], "valu": [1, 2, 3, 4, 5, 12, 13, 14, 15, 17], "api_info": 2, "retriev": 2, "api_modifi": 3, "data": 3, "path": 3, "ansibl": 4, "command": [5, 7, 12, 16, 17], "how": [6, 7, 8], "connect": [6, 8], "default": 6, "group": 6, "set": [6, 8], "up": [6, 8], "encrypt": 6, "pki": 6, "instal": 6, "certif": 6, "router": 6, "quot": [7, 14, 15], "unquot": 7, "argument": [7, 12, 13, 14, 15, 17], "ssh": 8, "import": 8, "an": [8, 14, 15], "inventori": 8, "index": [9, 11], "all": 9, "environ": 9, "variabl": 9, "descript": 11, "guid": 11, "plugin": 11, "cliconf": [11, 16], "filter": [11, 12, 13, 14, 15, 17], "join": 12, "list": [12, 13], "input": [12, 13, 14, 15, 17], "list_to_dict": 13, "convert": 13, "dictionari": 13, "keyword": 13, "quote_argu": 14, "quote_argument_valu": 15, "platform": 16, "split": 17}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"community.routeros.api_facts module \u2013 Collect facts from remote devices running MikroTik RouterOS using the API": [[0, "community-routeros-api-facts-module-collect-facts-from-remote-devices-running-mikrotik-routeros-using-the-api"]], "Synopsis": [[0, "synopsis"], [1, "synopsis"], [2, "synopsis"], [3, "synopsis"], [4, "synopsis"], [5, "synopsis"], [10, "synopsis"], [12, "synopsis"], [13, "synopsis"], [14, "synopsis"], [15, "synopsis"], [16, "synopsis"], [17, "synopsis"]], "Requirements": [[0, "requirements"], [1, "requirements"], [2, "requirements"], [3, "requirements"], [4, "requirements"]], "Parameters": [[0, "parameters"], [1, "parameters"], [2, "parameters"], [3, "parameters"], [4, "parameters"], [5, "parameters"], [10, "parameters"]], "Attributes": [[0, "attributes"], [1, "attributes"], [2, "attributes"], [3, "attributes"], [4, "attributes"], [5, "attributes"], [10, "attributes"]], "See Also": [[0, "see-also"], [1, "see-also"], [2, "see-also"], [3, "see-also"], [4, "see-also"], [5, "see-also"], [10, "see-also"]], "Examples": [[0, "examples"], [1, "examples"], [2, "examples"], [3, "examples"], [4, "examples"], [5, "examples"], [10, "examples"], [12, "examples"], [13, "examples"], [14, "examples"], [15, "examples"], [17, "examples"]], "Returned Facts": [[0, "returned-facts"], [10, "returned-facts"]], "Authors": [[0, "authors"], [1, "authors"], [2, "authors"], [3, "authors"], [4, "authors"], [5, "authors"], [10, "authors"], [12, "authors"], [13, "authors"], [14, "authors"], [15, "authors"], [16, "authors"], [17, "authors"]], "Collection links": [[0, "collection-links"], [1, "collection-links"], [2, "collection-links"], [3, "collection-links"], [4, "collection-links"], [5, "collection-links"], [10, "collection-links"], [12, "collection-links"], [13, "collection-links"], [14, "collection-links"], [15, "collection-links"], [16, "collection-links"], [17, "collection-links"]], "community.routeros.api_find_and_modify module \u2013 Find and modify information using the API": [[1, "community-routeros-api-find-and-modify-module-find-and-modify-information-using-the-api"]], "Notes": [[1, "notes"], [3, "notes"], [4, "notes"], [5, "notes"]], "Return Values": [[1, "return-values"], [2, "return-values"], [3, "return-values"], [4, "return-values"], [5, "return-values"]], "community.routeros.api_info module \u2013 Retrieve information from API": [[2, "community-routeros-api-info-module-retrieve-information-from-api"]], "community.routeros.api_modify module \u2013 Modify data at paths with API": [[3, "community-routeros-api-modify-module-modify-data-at-paths-with-api"]], "community.routeros.api module \u2013 Ansible module for RouterOS API": [[4, "community-routeros-api-module-ansible-module-for-routeros-api"]], "community.routeros.command module \u2013 Run commands on remote devices running MikroTik RouterOS": [[5, "community-routeros-command-module-run-commands-on-remote-devices-running-mikrotik-routeros"]], "How to connect to RouterOS devices with the RouterOS API": [[6, "how-to-connect-to-routeros-devices-with-the-routeros-api"]], "Using the community.routeros.api module defaults group": [[6, "using-the-community-routeros-api-module-defaults-group"]], "Setting up encryption": [[6, "setting-up-encryption"]], "Setting up a PKI": [[6, "setting-up-a-pki"]], "Installing a certificate on a MikroTik router": [[6, "installing-a-certificate-on-a-mikrotik-router"]], "How to quote and unquote commands and arguments": [[7, "how-to-quote-and-unquote-commands-and-arguments"]], "How to connect to RouterOS devices with SSH": [[8, "how-to-connect-to-routeros-devices-with-ssh"]], "Important notes": [[8, "important-notes"]], "Setting up an inventory": [[8, "setting-up-an-inventory"]], "Connecting to the device": [[8, "connecting-to-the-device"]], "Index of all Collection Environment Variables": [[9, "index-of-all-collection-environment-variables"]], "community.routeros.facts module \u2013 Collect facts from remote devices running MikroTik RouterOS": [[10, "community-routeros-facts-module-collect-facts-from-remote-devices-running-mikrotik-routeros"]], "Community.Routeros": [[11, "community-routeros"]], "Description": [[11, "description"]], "Communication": [[11, "communication"]], "Guides": [[11, "guides"]], "Plugin Index": [[11, "plugin-index"]], "Modules": [[11, "modules"]], "Cliconf Plugins": [[11, "cliconf-plugins"]], "Filter Plugins": [[11, "filter-plugins"]], "community.routeros.join filter \u2013 Join a list of arguments to a command": [[12, "community-routeros-join-filter-join-a-list-of-arguments-to-a-command"]], "Input": [[12, "input"], [13, "input"], [14, "input"], [15, "input"], [17, "input"]], "Return Value": [[12, "return-value"], [13, "return-value"], [14, "return-value"], [15, "return-value"], [17, "return-value"]], "community.routeros.list_to_dict filter \u2013 Convert a list of arguments to a dictionary": [[13, "community-routeros-list-to-dict-filter-convert-a-list-of-arguments-to-a-dictionary"]], "Keyword parameters": [[13, "keyword-parameters"]], "community.routeros.quote_argument filter \u2013 Quote an argument": [[14, "community-routeros-quote-argument-filter-quote-an-argument"]], "community.routeros.quote_argument_value filter \u2013 Quote an argument value": [[15, "community-routeros-quote-argument-value-filter-quote-an-argument-value"]], "community.routeros.routeros cliconf \u2013 Use routeros cliconf to run command on MikroTik RouterOS platform": [[16, "community-routeros-routeros-cliconf-use-routeros-cliconf-to-run-command-on-mikrotik-routeros-platform"]], "community.routeros.split filter \u2013 Split a command into arguments": [[17, "community-routeros-split-filter-split-a-command-into-arguments"]]}, "indexentries": {}})