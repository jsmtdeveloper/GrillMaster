'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">grill-master documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d00c062b02bcb39349d3125338f96efe786c50af0411cbd06ac313b85d3fa27cc50cce857dedfe61a446022c808210e29ca7d12cd65656123140e8c4de56cb5e"' : 'data-target="#xs-components-links-module-AppModule-d00c062b02bcb39349d3125338f96efe786c50af0411cbd06ac313b85d3fa27cc50cce857dedfe61a446022c808210e29ca7d12cd65656123140e8c4de56cb5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d00c062b02bcb39349d3125338f96efe786c50af0411cbd06ac313b85d3fa27cc50cce857dedfe61a446022c808210e29ca7d12cd65656123140e8c4de56cb5e"' :
                                            'id="xs-components-links-module-AppModule-d00c062b02bcb39349d3125338f96efe786c50af0411cbd06ac313b85d3fa27cc50cce857dedfe61a446022c808210e29ca7d12cd65656123140e8c4de56cb5e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-4aa010aabb27bdcb8710ffa05673c9371056168865cd194da5d14d52c56cfa113407aa42e1734530911b1e5c340a7b1a391944ee7cc0c0944bc27a315f0414cf"' : 'data-target="#xs-injectables-links-module-CoreModule-4aa010aabb27bdcb8710ffa05673c9371056168865cd194da5d14d52c56cfa113407aa42e1734530911b1e5c340a7b1a391944ee7cc0c0944bc27a315f0414cf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-4aa010aabb27bdcb8710ffa05673c9371056168865cd194da5d14d52c56cfa113407aa42e1734530911b1e5c340a7b1a391944ee7cc0c0944bc27a315f0414cf"' :
                                        'id="xs-injectables-links-module-CoreModule-4aa010aabb27bdcb8710ffa05673c9371056168865cd194da5d14d52c56cfa113407aa42e1734530911b1e5c340a7b1a391944ee7cc0c0944bc27a315f0414cf"' }>
                                        <li class="link">
                                            <a href="injectables/BarbecuingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BarbecuingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GrillMenuService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrillMenuService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-e3ef7d14b9146b7cd66484f2f7a42186ea6185d1a788c6fa09711ba729a5bfba1a340a7e4e2e9d80cefeb33a7a34ffba1870c43e9293f4ffb168ee286007fda2"' : 'data-target="#xs-components-links-module-PagesModule-e3ef7d14b9146b7cd66484f2f7a42186ea6185d1a788c6fa09711ba729a5bfba1a340a7e4e2e9d80cefeb33a7a34ffba1870c43e9293f4ffb168ee286007fda2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-e3ef7d14b9146b7cd66484f2f7a42186ea6185d1a788c6fa09711ba729a5bfba1a340a7e4e2e9d80cefeb33a7a34ffba1870c43e9293f4ffb168ee286007fda2"' :
                                            'id="xs-components-links-module-PagesModule-e3ef7d14b9146b7cd66484f2f7a42186ea6185d1a788c6fa09711ba729a5bfba1a340a7e4e2e9d80cefeb33a7a34ffba1870c43e9293f4ffb168ee286007fda2"' }>
                                            <li class="link">
                                                <a href="components/GrillComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GrillComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-f54cd2db1aa349a526612fe88701d319344b7fd16612888e507e3d8cc099fc2c54830fea9e867a0d67a99ece09711fa0aaeebf9bab0ae3ca167c8d2a54550949"' : 'data-target="#xs-components-links-module-SharedModule-f54cd2db1aa349a526612fe88701d319344b7fd16612888e507e3d8cc099fc2c54830fea9e867a0d67a99ece09711fa0aaeebf9bab0ae3ca167c8d2a54550949"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-f54cd2db1aa349a526612fe88701d319344b7fd16612888e507e3d8cc099fc2c54830fea9e867a0d67a99ece09711fa0aaeebf9bab0ae3ca167c8d2a54550949"' :
                                            'id="xs-components-links-module-SharedModule-f54cd2db1aa349a526612fe88701d319344b7fd16612888e507e3d8cc099fc2c54830fea9e867a0d67a99ece09711fa0aaeebf9bab0ae3ca167c8d2a54550949"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BarbecuingService.html" data-type="entity-link" >BarbecuingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GrillMenuService.html" data-type="entity-link" >GrillMenuService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FitsOnGrill.html" data-type="entity-link" >FitsOnGrill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Grill.html" data-type="entity-link" >Grill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/itemFromApi.html" data-type="entity-link" >itemFromApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemGrill.html" data-type="entity-link" >ItemGrill</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuFromApi.html" data-type="entity-link" >MenuFromApi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuGrill.html" data-type="entity-link" >MenuGrill</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});