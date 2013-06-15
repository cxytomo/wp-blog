Base64

Base64 is a generic term for a number of similar encoding schemes that encode binary data by treating it numerically and translating it into a base 64 representation. The Base64 term originates from a specific MIME content transfer encoding.

Base64 encoding schemes are commonly used when there is a need to encode binary data that needs be stored and transferred over media that are designed to deal with textual data. This is to ensure that the data remains intact without modification during transport. Base64 is used commonly in a number of applications including email via MIME, and storing complex data in XML.

Design

The particular choice of characters to make up the 64 characters required for base varies between implementations. The general rule is to choose a set of 64 characters that is both part of a subset common to most encodings, and also printable. This combination leaves the data unlikely to be modified in transit through systems, such as email, which were traditionally not 8-bit clean. For example, MIME's Base64 implementation uses A-Z, a-z, and 0-9 for the first 62 values. Other variations, usually derived from Base64, share this property but differ in the symbols chosen for the last two values; an example is UTF-7.

Example

A quote snippet from Thomas Hobbes's Leviathan:

"Man is distinguished, not only by his reason, but ..."

represented as an ASCII byte sequence is encoded in MIME's Base64 scheme as follows:

TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCAuLi4=

In the above quote the encoded value of Man is TWFu. Encoded in ASCII, M, a, n are stored as the bytes 77, 97, 110, which are 01001101, 01100001, 01101110 in base 2. These three bytes are joined together in a 24 bit buffer producing 010011010110000101101110. Packs of 6 bits (6 bits have a maximum of 64 different binary values) are converted into 4 numbers (24 = 4 * 6 bits) which are then converted to their corresponding values in Base64.

Text content	M	a	n
ASCII	77	97	110
Bit pattern	0	1	0	0	1	1	0	1	0	1	1	0	0	0	0	1	0	1	1	0	1	1	1	0
Index	19	22	5	46
Base64-encoded	T	W	F	u

As this example illustrates, Base64 encoding converts 3 uncoded bytes (in this case, ASCII characters) into 4 encoded ASCII characters.

Source: Wikipedia