<?php
/*
Template Name: Table template page
*/
?>
<?php get_header(); ?>


    <button class="btn btn-primary tab tab1" data-attr="pretable1" data-table="table1" data-load="no">Data_1</button>
    <button class="btn btn-primary tab tab2" data-attr="pretable2" data-table="table2" data-load="no">Data_2</button>
    <button class="btn btn-primary tab tab3" data-attr="pretable3" data-table="table3" data-load="no">Data_3</button>
    <button class="btn btn-primary tab tab4" data-attr="pretremor1" data-table="tremor1" data-load="no">Tremor_1
    </button>
    <button class="btn btn-primary tab tab5" data-attr="pretremor2" data-table="tremor2" data-load="no">Tremor_2
    </button>
    <button class="btn btn-primary tab tab6" data-attr="pretremor3" data-table="tremor3" data-load="no">Tremor_3
    </button>
    <button class="btn btn-primary tab tab7" data-attr="negentropic" data-table="negentropic" data-load="no">
        Tremor_Negentropic
    </button>


    <button class="btn btn-primary tabtable1 tabtable" data-table="powerTable1" data-attr="pretremor1">Power table for
        Tremor_1
    </button>
    <button class="btn btn-primary tabtable2 tabtable" data-table="powerTable2" data-attr="pretremor2">Power table for
        Tremor_2
    </button>
    <button class="btn btn-primary tabtable3 tabtable" data-table="powerTable3" data-attr="pretremor3">Power table for
        Tremor_3
    </button>

    <div class="container-fluid" style="margin-top: 50px;">
        <div class="table-responsive table-fix-h">
            <table class="table pretable1 table-bordered">
                <th>_</th>
                <th>time</th>
                <th>iPad</th>
                <th>outMic0ed</th>
                <th>outMicFiltered</th>
                <th>outMicNrmalz</th>
                <th>outMicM50</th>
                <tr>
                    <td>count</td>
                    <td>_</td>
                    <td class="count forIPad"></td>
                    <td class="count forMic0ed"></td>
                    <td class="count forMicFilt"></td>
                    <td class="count forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>median</td>
                    <td>_</td>
                    <td class="median forIPad"></td>
                    <td class="median forMic0ed"></td>
                    <td class="median forMicFilt"></td>
                    <td class="median forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>3 quartile</td>
                    <td>_</td>
                    <td class="threequartile forIPad"></td>
                    <td class="threequartile forMic0ed"></td>
                    <td class="threequartile forMicFilt"></td>
                    <td class="threequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>1 quartile</td>
                    <td>_</td>
                    <td class="onequartile forIPad"></td>
                    <td class="onequartile forMic0ed"></td>
                    <td class="onequartile forMicFilt"></td>
                    <td class="onequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>_</td>
                    <td class="average forIPad"></td>
                    <td class="average forMic0ed"></td>
                    <td class="average forMicFilt"></td>
                    <td class="average forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Maximum</td>
                    <td>_</td>
                    <td class="maximum forIPad"></td>
                    <td class="maximum forMic0ed"></td>
                    <td class="maximum forMicFilt"></td>
                    <td class="maximum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Minimum</td>
                    <td>_</td>
                    <td class="minimum forIPad"></td>
                    <td class="minimum forMic0ed"></td>
                    <td class="minimum forMicFilt"></td>
                    <td class="minimum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
            </table>
            <table class="table pretable2 table-bordered">
                <th>_</th>
                <th>time</th>
                <th>iPad</th>
                <th>outMic0ed</th>
                <th>outMicFiltered</th>
                <th>outMicNrmalz</th>
                <th>outMicM50</th>
                <tr>
                    <td>count</td>
                    <td>_</td>
                    <td class="count forIPad"></td>
                    <td class="count forMic0ed"></td>
                    <td class="count forMicFilt"></td>
                    <td class="count forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>median</td>
                    <td>_</td>
                    <td class="median forIPad"></td>
                    <td class="median forMic0ed"></td>
                    <td class="median forMicFilt"></td>
                    <td class="median forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>3 quartile</td>
                    <td>_</td>
                    <td class="threequartile forIPad"></td>
                    <td class="threequartile forMic0ed"></td>
                    <td class="threequartile forMicFilt"></td>
                    <td class="threequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>1 quartile</td>
                    <td>_</td>
                    <td class="onequartile forIPad"></td>
                    <td class="onequartile forMic0ed"></td>
                    <td class="onequartile forMicFilt"></td>
                    <td class="onequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>_</td>
                    <td class="average forIPad"></td>
                    <td class="average forMic0ed"></td>
                    <td class="average forMicFilt"></td>
                    <td class="average forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Maximum</td>
                    <td>_</td>
                    <td class="maximum forIPad"></td>
                    <td class="maximum forMic0ed"></td>
                    <td class="maximum forMicFilt"></td>
                    <td class="maximum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Minimum</td>
                    <td>_</td>
                    <td class="minimum forIPad"></td>
                    <td class="minimum forMic0ed"></td>
                    <td class="minimum forMicFilt"></td>
                    <td class="minimum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
            </table>
            <table class="table pretable3 table-bordered">
                <th>_</th>
                <th>time</th>
                <th>iPad</th>
                <th>outMic0ed</th>
                <th>outMicFiltered</th>
                <th>outMicNrmalz</th>
                <th>outMicM50</th>
                <tr>
                    <td>count</td>
                    <td>_</td>
                    <td class="count forIPad"></td>
                    <td class="count forMic0ed"></td>
                    <td class="count forMicFilt"></td>
                    <td class="count forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>median</td>
                    <td>_</td>
                    <td class="median forIPad"></td>
                    <td class="median forMic0ed"></td>
                    <td class="median forMicFilt"></td>
                    <td class="median forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>3 quartile</td>
                    <td>_</td>
                    <td class="threequartile forIPad"></td>
                    <td class="threequartile forMic0ed"></td>
                    <td class="threequartile forMicFilt"></td>
                    <td class="threequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>1 quartile</td>
                    <td>_</td>
                    <td class="onequartile forIPad"></td>
                    <td class="onequartile forMic0ed"></td>
                    <td class="onequartile forMicFilt"></td>
                    <td class="onequartile forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>average</td>
                    <td>_</td>
                    <td class="average forIPad"></td>
                    <td class="average forMic0ed"></td>
                    <td class="average forMicFilt"></td>
                    <td class="average forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Maximum</td>
                    <td>_</td>
                    <td class="maximum forIPad"></td>
                    <td class="maximum forMic0ed"></td>
                    <td class="maximum forMicFilt"></td>
                    <td class="maximum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
                <tr>
                    <td>Minimum</td>
                    <td>_</td>
                    <td class="minimum forIPad"></td>
                    <td class="minimum forMic0ed"></td>
                    <td class="minimum forMicFilt"></td>
                    <td class="minimum forMicNrmalz"></td>
                    <td>_</td>
                </tr>
            </table>

            <table class="table table1 table-bordered">
                <caption>DATA 1</caption>
                <tr>
                    <th>row</th>
                    <th>time</th>
                    <th>iPad</th>
                    <th>outMic0ed</th>
                    <th>outMicFiltered</th>
                    <th>outMicNrmalz</th>
                    <th>outMicM50</th>
                </tr>
            </table>

            <table class="table table2 table-bordered">
                <caption>DATA 2</caption>
                <th>row</th>
                <th>time</th>
                <th>iPad</th>
                <th>outMic0ed</th>
                <th>outMicFiltered</th>
                <th>outMicNrmalz</th>
                <th>outMicM50</th>
            </table>

            <table class="table table3 table-bordered">
                <caption>DATA 3</caption>
                <th>row</th>
                <th>time</th>
                <th>iPad</th>
                <th>outMic0ed</th>
                <th>outMicFiltered</th>
                <th>outMicNrmalz</th>
                <th>outMicM50</th>
            </table>

            <table class="table tremor1 table-bordered">
                <caption>Tremor 1</caption>

                <tr class='headrow'>
                    <th>Row</th>
                </tr>

            </table>

            <table class="table tremor2 table-bordered">
                <caption>Tremor 1</caption>
                <tr class='headrow'>
                    <th>Row</th>
                </tr>
            </table>

            <table class="table tremor3 table-bordered">
                <caption>Tremor 1</caption>
                <tr class='headrow'>
                    <th>Row</th>
                </tr>
            </table>
        </div>


        <table class="table pretremor1 table-bordered">

            <th>maxConstAbs</th>
            <th>maxConstAbs_NO</th>
            <th>maxFreqMag</th>
            <th>maxFreqMag_NO</th>
            <th>averageConstAbs</th>
            <th>averageConstAbs_NO</th>
            <th>averageFreqMag</th>
            <th>averageFreqMag_NO</th>
            <th>averageD23_635</th>
            <th>stanDotClone</th>
            <tr class="tremData">

            </tr>
            <th>divisionAverageValues</br>FftMag_23_404_405_635</th>
            <th>divisionAverageValues</br>FftMag_23_329_329_635</th>
            <th>quartileFftMag_23_635</th>
            <th>divisionQuartOnMaxFftMag</th>
            <th>division_q3_average</th>
            <th>maxFreqMagDiff</th>
            <th>maxFreqMagDiff_NO</th>
            <tr class="tremDataNext">

            </tr>
            <th>sideralDay</th>
            <th>liberating</th>
            <th>breakemo</th>
            <th>reprLove</th>
            <th>connect</th>
            <th>intuition</th>
            <th>spirorder</th>
            <th>mixSolft</th>
            <tr class="tremDataNextNew"></tr>

            <th>powerOctaves</th>
            <th>avgPowerOctaves</th>
            <th>maxFftMagNormalized</th>
            <th>totalMusicRaw</th>
            <th>totalMusicRawStDev</th>
            <th>totalMusicSmth</th>
            <th>totalMusicSmthStDev</th>
            <th>totalMusicRaw_Smth</th>

            <tr class="tremDataNextNewNext"></tr>
            <th>sumSmoothedStDev</th>
            <th>sumNormalizedAvg</th>
            <th>sumSmthNormedAvg</th>
            <tr class="tremNextRow"></tr>


        </table>

        <table class="table pretremor2 table-bordered">
            <th>maxConstAbs</th>
            <th>maxConstAbs_NO</th>
            <th>maxFreqMag</th>
            <th>maxFreqMag_NO</th>
            <th>averageConstAbs</th>
            <th>averageConstAbs_NO</th>
            <th>averageFreqMag</th>
            <th>averageFreqMag_NO</th>
            <th>averageD23_635</th>
            <th>stanDotClone</th>
            <tr class="tremData">

            </tr>
            <th>divisionAverageValuesFftMag_23_404_405_635</th>
            <th>divisionAverageValuesFftMag_23_329_329_635</th>
            <th>quartileFftMag_23_635</th>
            <th>divisionQuartOnMaxFftMag</th>
            <th>division_q3_average</th>
            <th>maxFreqMagDiff</th>
            <th>maxFreqMagDiff_NO</th>
            <tr class="tremDataNext">

            </tr>
            <th>sideralDay</th>
            <th>liberating</th>
            <th>breakemo</th>
            <th>reprLove</th>
            <th>connect</th>
            <th>intuition</th>
            <th>spirorder</th>
            <th>mixSolft</th>
            <tr class="tremDataNextNew"></tr>

            <th>powerOctaves</th>
            <th>avgPowerOctaves</th>
            <th>maxFftMagNormalized</th>
            <th>totalMusicRaw</th>
            <th>totalMusicRawStDev</th>
            <th>totalMusicSmth</th>
            <th>totalMusicSmthStDev</th>
            <th>totalMusicRaw_Smth</th>

            <tr class="tremDataNextNewNext"></tr>
            <th>sumSmoothedStDev</th>
            <th>sumNormalizedAvg</th>
            <th>sumSmthNormedAvg</th>
            <tr class="tremNextRow"></tr>


        </table>

        <table class="table pretremor3 table-bordered">
            <th>maxConstAbs</th>
            <th>maxConstAbs_NO</th>
            <th>maxFreqMag</th>
            <th>maxFreqMag_NO</th>
            <th>averageConstAbs</th>
            <th>averageConstAbs_NO</th>
            <th>averageFreqMag</th>
            <th>averageFreqMag_NO</th>
            <th>averageD23_635</th>
            <th>stanDotClone</th>
            <tr class="tremData">

            </tr>
            <th>divisionAverageValuesFftMag_23_404_405_635</th>
            <th>divisionAverageValuesFftMag_23_329_329_635</th>
            <th>quartileFftMag_23_635</th>
            <th>divisionQuartOnMaxFftMag</th>
            <th>division_q3_average</th>
            <th>maxFreqMagDiff</th>
            <th>maxFreqMagDiff_NO</th>
            <tr class="tremDataNext">

            </tr>
            <th>sideralDay</th>
            <th>liberating</th>
            <th>breakemo</th>
            <th>reprLove</th>
            <th>connect</th>
            <th>intuition</th>
            <th>spirorder</th>
            <th>mixSolft</th>
            <tr class="tremDataNextNew"></tr>

            <th>powerOctaves</th>
            <th>avgPowerOctaves</th>
            <th>maxFftMagNormalized</th>
            <th>totalMusicRaw</th>
            <th>totalMusicRawStDev</th>
            <th>totalMusicSmth</th>
            <th>totalMusicSmthStDev</th>
            <th>totalMusicRaw_Smth</th>

            <tr class="tremDataNextNewNext"></tr>
            <th>sumSmoothedStDev</th>
            <th>sumNormalizedAvg</th>
            <th>sumSmthNormedAvg</th>
            <tr class="tremNextRow"></tr>


        </table>

        <table class="table negentropic0 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>

        <table class="table negentropic1 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>
        <table class="table negentropic2 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>
        <table class="table negentropic3 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>

        <table class="table negentropic4 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>
        <table class="table negentropic5 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>
        <table class="table negentropic6 table-bordered">
            <th>adress</th>
            <th>value</th>
        </table>


    </div>


<?php get_footer(); ?>