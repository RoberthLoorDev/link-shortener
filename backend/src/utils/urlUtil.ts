export const formatOriginalUrl = (originalLink: string) => {
    const linkReceived = originalLink
    const domainLinkWithoutWWW = linkReceived.replace("https://www.", "")
    const domainLinkWithoutHttps = domainLinkWithoutWWW.replace("https://", "")
    const separatedLink = domainLinkWithoutHttps.split(".")
    const subDomain = separatedLink[0]
    const subDomainWithoutVocals = subDomain.replace(/[aeiou]/gi, "")
    subDomainWithoutVocals.replace("https://", "")

    return subDomainWithoutVocals
}
