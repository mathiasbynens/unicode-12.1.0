module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,109,218,73,178,237,56,114,4,208,189,228,88,131,143,142,32,135,4,8,168,239,187,42,53,203,208,254,69,153,120,158,44,210,52,224,55,143,202,11,135,59,112,61,0,222,87,255,254,219,253,219,159,252,54,222,103,190,207,243,62,235,125,246,251,252,233,251,252,217,251,252,249,251,252,197,251,252,229,251,252,213,251,252,245,251,252,205,251,252,237,251,252,221,251,252,253,251,252,195,251,252,227,251,252,211,251,252,243,251,252,203,251,252,235,251,252,225,125,254,248,62,255,246,62,255,241,95,191,126,205,95,64,2,50,80,128,10,52,224,0,58,112,2,23,112,3,3,152,192,3,44,96,127,224,161,231,161,231,161,231,161,231,161,231,161,231,161,231,33,227,33,227,33,227,33,227,33,227,33,227,249,100,164,95,191,128,12,84,224,0,78,224,6,38,128,39,225,73,120,18,158,132,39,225,73,120,18,158,132,39,227,201,120,50,158,140,39,227,201,120,50,158,140,167,224,41,120,10,158,130,167,92,192,0,30,224,219,157,84,19,80,128,6,116,128,140,74,70,37,163,145,209,200,104,100,52,50,26,59,13,79,195,211,240,28,120,14,60,7,158,3,207,129,231,192,115,224,57,240,116,60,29,79,199,211,241,116,60,221,250,116,235,211,173,207,105,89,78,60,39,158,19,207,105,125,78,60,39,97,39,194,147,176,211,130,95,20,94,166,184,172,252,101,138,203,20,151,41,46,154,47,150,47,82,47,204,55,230,155,230,27,225,141,240,70,120,211,124,35,188,73,189,17,14,10,7,194,65,234,240,37,25,8,7,133,3,161,38,147,52,153,164,183,36,189,37,105,41,73,75,73,58,73,210,64,146,190,145,180,139,164,75,164,7,161,230,144,244,132,244,211,1,150,101,89,92,44,194,150,101,89,244,44,122,22,23,11,207,38,99,227,217,120,54,158,77,207,70,184,17,110,132,251,35,204,90,83,214,154,178,214,148,181,166,172,53,101,173,41,107,77,89,107,202,90,83,214,154,178,214,148,181,166,172,53,101,173,41,107,77,89,107,202,90,83,214,154,178,214,148,181,166,172,53,101,173,41,107,77,89,107,202,90,83,214,154,114,241,97,141,40,107,68,185,24,165,17,101,141,40,87,179,235,72,185,146,81,201,208,154,178,214,148,181,166,162,21,20,173,160,232,0,165,127,95,173,34,203,229,60,129,11,184,129,9,96,150,229,34,194,229,50,133,44,23,89,46,87,3,204,37,212,69,168,203,101,210,203,164,215,0,204,46,239,229,34,67,240,139,224,151,155,158,155,12,29,160,220,100,104,5,69,43,40,55,25,122,66,185,201,184,201,16,198,226,56,46,78,225,226,240,45,18,87,36,174,72,92,145,184,34,113,69,226,138,196,21,137,43,18,87,228,171,136,85,217,20,138,85,217,150,101,255,140,250,164,86,249,170,191,18,144,129,2,84,160,1,7,208,129,19,184,128,27,24,192,4,30,96,1,244,200,105,77,244,8,108,77,244,72,110,77,244,136,112,77,244,200,114,77,244,8,117,77,244,72,119,77,244,136,121,77,244,200,123,205,244,8,126,205,244,232,0,53,211,163,21,212,76,143,158,80,51,61,154,67,205,244,232,18,53,211,163,93,212,76,143,59,64,117,7,168,238,0,213,29,160,186,3,84,119,128,234,14,80,221,1,170,224,87,193,175,238,0,85,7,168,238,0,181,227,233,120,58,158,19,143,86,80,181,130,170,21,84,167,121,213,1,170,224,87,121,175,98,94,165,187,10,117,149,229,42,194,213,217,93,37,183,10,108,149,211,42,158,213,217,93,157,221,117,224,113,100,215,129,103,224,113,82,215,129,199,145,93,7,30,47,17,213,75,68,245,238,80,157,230,213,105,94,189,32,84,135,120,117,136,87,151,255,234,206,95,93,245,171,27,126,213,82,170,150,82,181,148,170,165,84,45,165,106,41,85,75,169,90,74,213,82,170,150,82,181,148,170,165,212,141,199,33,94,53,153,234,16,175,206,238,170,201,84,103,119,213,100,154,222,210,180,148,166,147,52,13,164,233,27,77,187,104,186,68,211,28,154,158,208,180,130,166,3,52,193,111,242,222,196,188,73,119,19,234,38,203,77,132,155,228,54,129,109,114,218,196,179,73,101,19,198,86,18,128,167,20,0,97,105,0,230,210,1,83,120,245,104,142,254,230,232,111,197,164,238,0,173,252,204,254,181,130,86,217,113,43,104,149,30,215,131,230,122,208,92,15,154,235,65,243,230,210,220,19,90,165,199,133,161,85,122,220,28,90,165,199,21,162,85,122,188,230,180,70,143,247,157,214,232,241,226,211,26,61,223,27,208,251,90,249,11,72,64,6,10,80,129,6,252,12,239,192,9,92,192,13,12,96,2,15,176,128,253,129,65,207,160,103,208,51,232,25,244,12,122,6,61,131,158,65,207,160,103,208,51,232,25,244,12,122,6,61,131,158,73,207,164,103,210,51,233,153,244,76,122,38,25,95,183,73,46,66,201,69,232,5,25,40,64,5,26,112,0,29,56,129,11,184,129,1,76,224,103,246,5,124,190,138,117,46,214,185,88,231,98,157,139,117,46,214,185,88,231,98,157,139,117,46,214,185,88,231,98,157,139,117,46,214,185,88,231,98,157,139,117,46,214,185,88,231,98,157,139,117,46,214,185,76,122,44,120,153,244,76,122,38,61,147,158,73,207,207,238,76,122,38,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,15,61,139,158,69,207,162,103,209,179,232,89,244,44,122,22,61,139,158,69,207,162,103,209,179,232,89,244,44,122,22,61,155,158,77,207,166,103,211,179,233,217,159,158,249,221,73,94,144,128,12,20,160,2,63,163,14,160,3,39,112,1,55,48,128,9,60,192,2,62,23,83,42,167,84,78,169,156,82,57,165,114,74,229,148,202,41,149,83,42,167,84,78,169,156,82,57,165,114,74,229,148,202,41,149,83,42,167,84,78,169,156,82,57,165,114,74,229,148,202,41,149,83,42,167,84,78,169,156,50,56,101,112,202,224,250,110,14,47,200,64,5,14,224,4,110,96,2,31,225,74,120,18,158,132,39,225,73,120,18,158,132,39,225,201,120,50,158,140,39,227,201,120,50,158,140,39,227,41,120,10,158,130,167,224,41,120,10,158,130,167,224,169,120,42,158,138,167,226,169,120,42,158,138,167,226,105,120,26,158,134,199,185,188,26,158,134,167,225,105,120,14,60,7,158,3,207,129,231,192,115,224,57,240,28,120,58,158,142,167,227,233,120,58,158,142,167,227,233,120,78,60,39,158,19,207,137,231,196,115,226,57,241,156,120,116,137,165,57,44,61,97,137,240,146,220,37,176,75,78,151,120,46,169,92,194,184,100,112,137,222,146,184,37,104,75,190,150,88,45,105,90,66,180,156,104,75,136,150,243,107,57,182,150,211,106,57,164,150,179,105,57,146,150,147,104,57,128,150,115,103,57,110,150,83,102,57,92,150,51,101,57,74,150,19,100,57,56,150,243,98,57,38,150,211,97,57,20,150,179,96,57,2,150,206,191,52,252,165,207,47,237,125,233,234,107,227,217,120,54,158,141,231,123,43,73,91,223,216,223,47,21,47,184,129,1,76,224,1,126,134,127,61,106,235,27,59,225,209,64,118,194,163,147,236,132,71,151,216,217,40,237,98,103,163,244,141,157,127,70,153,61,155,93,151,216,5,143,118,177,11,30,125,99,23,60,26,200,46,120,116,137,93,241,104,23,187,226,209,55,118,197,211,124,184,249,76,251,249,79,152,229,125,31,62,44,248,251,48,74,7,216,135,225,90,193,62,240,200,233,62,241,8,236,62,241,72,238,62,241,136,240,62,241,56,169,183,147,122,59,169,183,147,122,59,169,183,147,122,139,249,118,82,111,89,222,78,216,45,212,219,9,187,165,123,59,97,183,152,111,39,236,150,229,237,100,220,66,189,221,87,183,116,111,129,221,46,147,91,114,183,203,228,22,225,45,149,219,77,111,139,231,118,211,219,18,183,221,190,182,232,237,245,243,25,132,98,181,183,15,203,215,222,62,252,5,45,251,11,93,246,135,185,23,140,15,124,167,94,246,151,172,23,36,224,231,63,21,160,2,13,192,124,116,224,4,46,192,164,135,73,15,194,190,239,88,246,135,176,23,236,15,156,223,164,126,255,121,65,7,78,224,2,110,96,0,19,120,128,5,124,83,248,177,40,251,177,232,5,25,48,251,215,168,179,159,143,94,64,207,164,103,210,51,233,153,244,76,122,38,61,147,158,73,207,247,90,145,231,119,197,122,65,2,50,80,128,10,52,224,0,58,112,2,23,112,3,3,152,192,3,44,128,158,68,79,162,39,209,147,232,73,244,36,122,18,61,137,158,68,79,162,39,209,147,232,73,244,36,122,18,61,137,158,76,79,166,39,211,147,233,201,244,100,122,124,249,103,166,39,211,147,233,145,139,41,23,51,211,147,233,201,244,72,202,20,144,41,32,83,64,166,56,76,41,152,190,252,211,119,126,30,63,132,12,118,204,29,115,231,162,251,112,247,225,211,135,79,31,62,205,126,178,124,114,122,50,120,242,117,34,188,240,92,120,46,60,23,158,11,207,133,231,194,115,225,185,241,220,120,110,60,55,158,27,207,141,231,198,115,227,25,120,6,158,129,71,43,240,10,147,189,185,188,0,143,152,79,233,158,66,61,101,121,138,240,148,220,41,176,83,78,167,120,206,7,207,131,231,193,243,224,121,240,60,120,30,60,15,158,133,103,225,89,190,18,203,87,226,187,71,221,199,247,54,241,130,159,255,165,2,7,112,2,55,48,129,245,129,134,167,225,105,120,26,158,134,167,225,105,120,26,158,3,207,129,231,192,115,224,57,240,28,120,14,60,167,225,167,225,167,225,167,225,167,225,167,225,231,207,112,50,46,60,23,158,11,207,133,231,194,243,125,87,239,254,117,137,23,84,224,0,78,224,231,195,19,248,38,237,197,240,98,120,49,188,24,94,12,47,134,23,195,109,101,183,149,221,86,118,91,217,109,101,183,149,221,86,118,91,217,109,101,183,149,221,86,118,91,217,109,101,183,149,221,86,118,91,217,109,101,183,149,221,86,118,91,217,109,101,183,149,221,86,246,3,207,247,255,66,121,193,0,30,192,103,236,123,183,239,221,190,119,251,222,79,195,79,195,237,114,183,203,221,230,118,155,219,127,54,247,34,236,50,233,109,248,109,248,109,210,27,207,141,231,198,115,147,113,35,188,233,185,49,15,204,223,47,48,47,48,197,247,11,204,11,204,53,204,53,204,53,204,53,76,49,48,79,60,211,240,239,190,241,130,255,229,217,251,59,245,94,144,129,2,84,160,1,63,163,58,112,2,23,112,3,3,152,192,3,44,96,127,224,251,193,228,5,244,20,122,10,61,133,158,66,79,161,167,208,83,232,41,244,124,33,122,206,95,233,253,215,117,232,167,76,177,204,177,44,177,172,177,108,177,60,98,217,99,121,198,242,138,229,239,68,142,88,206,88,62,177,92,177,220,161,76,209,111,138,126,83,244,155,162,223,20,253,166,232,55,69,191,41,250,77,209,111,138,126,83,244,155,162,223,20,253,166,232,55,69,191,41,250,205,209,111,142,126,115,244,155,163,223,28,253,230,232,55,71,191,57,250,29,113,222,17,231,29,113,222,17,231,29,113,222,17,231,29,113,222,241,187,121,227,58,143,184,206,35,174,243,136,235,60,226,58,143,184,206,35,174,243,136,235,60,163,223,25,253,206,232,119,70,191,51,250,157,209,239,140,126,103,244,59,163,223,25,253,206,232,119,70,191,51,250,157,209,239,140,126,103,244,251,68,191,79,244,251,68,191,207,143,223,242,63,229,249,43,150,41,150,57,150,191,27,91,99,217,98,121,196,178,199,242,140,229,21,203,59,150,35,150,51,150,79,44,87,44,119,40,175,232,247,138,126,175,232,247,138,126,175,232,247,138,126,175,232,247,138,126,175,232,247,138,126,175,232,247,138,126,175,232,247,138,126,175,232,247,138,126,239,232,247,142,126,239,232,247,142,126,239,232,247,142,126,239,232,247,142,126,239,232,247,142,126,239,232,247,142,126,239,232,247,142,126,239,232,247,142,126,71,244,59,162,223,255,235,117,71,92,156,35,46,206,17,23,231,136,139,115,196,197,57,226,226,28,113,113,142,184,56,71,92,156,35,46,206,17,23,231,136,139,115,196,197,57,226,226,28,113,113,142,184,56,71,92,156,35,46,206,241,255,44,206,136,126,71,244,59,162,223,17,253,142,232,119,68,191,35,250,29,209,239,136,126,71,244,59,162,223,17,253,254,28,4,105,188,255,250,19,213,79,153,98,153,99,89,98,89,99,217,98,121,196,178,199,242,140,229,21,203,59,150,35,150,51,150,79,44,87,44,163,223,22,253,182,232,183,69,191,45,250,109,209,111,139,126,91,244,219,162,223,22,253,182,232,183,69,191,45,250,109,209,111,139,126,91,244,219,248,45,247,251,239,243,115,97,254,202,20,203,28,203,18,203,26,203,22,203,35,150,61,150,103,44,175,88,222,177,28,177,156,177,124,98,185,98,25,253,166,232,55,69,191,41,250,77,209,111,138,126,83,244,155,162,223,20,253,166,232,55,69,191,41,250,77,209,111,138,126,83,244,155,162,223,20,253,230,232,247,189,48,255,231,127,3,136,74,140,248,163,53,0,0])))